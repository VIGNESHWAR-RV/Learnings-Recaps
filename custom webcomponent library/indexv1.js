// ============================================================
// Minimal Reactive Custom Element Runtime
// ============================================================

// ============================================================
// Base Signal
// ============================================================

class Signal {
  constructor(value) {
    this.value = value;
    this.subscribers = new Set();
  }

  get() {
    return this.value;
  }

  set(nextValue) {
    if (Object.is(this.value, nextValue)) return;

    this.value = nextValue;

    for (const subscriber of this.subscribers) {
      subscriber(this.value);
    }
  }

  subscribe(callback) {
    this.subscribers.add(callback);

    return () => {
      this.subscribers.delete(callback);
    };
  }

  dispose() {
    this.subscribers.clear();
  }
}

// ============================================================
// Reactive Custom Element Base
// ============================================================

export class BaseElement extends HTMLElement {
  constructor() {
    super();

    this.refs = new Map();

    this._signals = new Set();

    this._eventListeners = [];

    this.attachShadow({
      mode: "open",
    });
  }

  // ==========================================================
  // Lifecycle
  // ==========================================================

  connectedCallback() {
    (async () => {
      try {
        if (this.mount) {
          await this.mount();
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }

  disconnectedCallback() {
    (async () => {
      try {
        if (this.unmount) {
          await this.unmount();
        }

        this._removeAllEventListeners();

        this._disposeSignals();

        this.refs.clear();

        this.shadowRoot.innerHTML = "";
      } catch (err) {
        console.error(err);
      }
    })();
  }

  adoptedCallback() {}

  // ==========================================================
  // Signal
  // ==========================================================

  signal(initialValue) {
    const signal = new Signal(initialValue);

    this._signals.add(signal);

    return signal;
  }

  _disposeSignals() {
    for (const signal of this._signals) {
      signal.dispose();
    }

    this._signals.clear();
  }

  // ==========================================================
  // Event Handling
  // ==========================================================

  _trackEventListener(element, eventName, callback) {
    this._eventListeners.push({
      element,
      eventName,
      callback,
    });
  }

  _removeAllEventListeners() {
    for (const listener of this._eventListeners) {
      listener.element.removeEventListener(
        listener.eventName,
        listener.callback,
      );
    }

    this._eventListeners = [];
  }

  // ==========================================================
  // CSS
  // ==========================================================

  attachCSS(styles) {
    const style = document.createElement("style");

    style.textContent = styles;

    this.shadowRoot.appendChild(style);

    return style;
  }

  // ==========================================================
  // DOM Creation
  // ==========================================================

  createElement(elementObj) {
    const { tag, children, text, ...attributes } = elementObj;

    const element = document.createElement(tag);

    // ========================================================
    // Text
    // ========================================================

    if (text !== undefined) {
      if (text instanceof Signal) {
        element.textContent = text.get();

        const unsubscribe = text.subscribe((value) => {
          element.textContent = value;
        });

        this._trackSignalCleanup(text, unsubscribe);
      } else {
        element.textContent = text;
      }
    }

    // ========================================================
    // Attributes / Events
    // ========================================================

    if (Object.keys(attributes).length) {
      for (const [key, value] of Object.entries(attributes)) {
        // ----------------------------------------------------
        // Ref ID
        // ----------------------------------------------------

        if (key === "id") {
          if (this.refs.has(value)) {
            console.warn(`Duplicate ref id detected: ${value}`);
          }

          this.refs.set(value, element);
        }

        // ----------------------------------------------------
        // Event
        // ----------------------------------------------------
        else if (key.startsWith("on_")) {
          const eventName = key.split("on_")[1];

          const { callback, ...options } = value;

          const boundCallback = callback.bind(this);

          element.addEventListener(eventName, boundCallback, options);

          this._trackEventListener(element, eventName, boundCallback);
        }

        // ----------------------------------------------------
        // Reactive Attribute
        // ----------------------------------------------------
        else if (value instanceof Signal) {
          element[key] = value.get();

          const unsubscribe = value.subscribe((nextValue) => {
            element[key] = nextValue;
          });

          this._trackSignalCleanup(value, unsubscribe);
        }

        // ----------------------------------------------------
        // Normal Property
        // ----------------------------------------------------
        else {
          element[key] = value;
        }
      }
    }

    // ========================================================
    // Children
    // ========================================================

    if (children) {
      for (const child of children) {
        // ----------------------------------------------------
        // Existing DOM Node
        // ----------------------------------------------------

        if (child instanceof Node) {
          element.appendChild(child);
        }

        // ----------------------------------------------------
        // Nested Element Definition
        // ----------------------------------------------------
        else if (typeof child === "object" && child !== null && child.tag) {
          const childElement = this.createElement(child);

          element.appendChild(childElement);
        }

        // ----------------------------------------------------
        // Reactive Text Child
        // ----------------------------------------------------
        else if (child instanceof Signal) {
          const textNode = document.createTextNode(child.get());

          const unsubscribe = child.subscribe((value) => {
            textNode.textContent = value;
          });

          this._trackSignalCleanup(child, unsubscribe);

          element.appendChild(textNode);
        }

        // ----------------------------------------------------
        // Primitive Text Child
        // ----------------------------------------------------
        else {
          element.appendChild(document.createTextNode(String(child)));
        }
      }
    }

    return element;
  }

  // ==========================================================
  // Signal Cleanup
  // ==========================================================

  _trackSignalCleanup(signal, unsubscribe) {
    const originalDispose = signal.dispose.bind(signal);

    signal.dispose = () => {
      unsubscribe();
      originalDispose();
    };
  }
}

// ============================================================
// Example Counter Component
// ============================================================

class AppCounter extends BaseElement {
  async mount() {
    this.attachCSS(`
      button {
        padding: 10px 16px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        font-size: 16px;
      }
    `);

    this.count = this.signal(1);

    const renderTree = this.createElement({
      tag: "div",

      children: [
        {
          tag: "h3",

          children: ["Reactive Counter"],
        },

        {
          tag: "button",

          id: "counterButton",

          on_click: {
            callback: () => {
              this.count.set(this.count.get() + 1);
            },
          },

          children: [this.count],
        },
      ],
    });

    this.shadowRoot.appendChild(renderTree);
  }

  async unmount() {
    console.log("Counter unmounted");
  }
}

customElements.define("app-counter", AppCounter);
