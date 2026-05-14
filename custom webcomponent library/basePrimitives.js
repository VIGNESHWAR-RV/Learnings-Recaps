let CURRENT_EFFECT = null;
class Signal {
  constructor(value) {
    this.value = value;
    this.subscribers = new Set();
  }

  get() {
    if (CURRENT_EFFECT) {
      this.subscribers.add(CURRENT_EFFECT);
      CURRENT_EFFECT.dependencies.add(this);
    }
    return this.value;
  }

  set(nextValue) {
    // return if same value
    if (Object.is(this.value, nextValue)) {
      return;
    }

    this.value = nextValue;
    for (const effect of [...this.subscribers]) {
      effect.run();
    }
  }

  dispose() {
    this.subscribers.clear();
  }
}
class Effect {
  constructor(callback) {
    this.callback = callback;

    // signals used by this effect
    this.dependencies = new Set();

    this.disposed = false;

    this.run();
  }

  // cleaning on signal's subscribers & effect's tracked dependent signals here
  cleanup() {
    for (const dependency of this.dependencies) {
      dependency.subscribers.delete(this);
    }

    this.dependencies.clear();
  }

  run() {
    if (this.disposed) {
      return;
    }

    this.cleanup();

    // preserve previous effect
    // (important for nested effects later)
    const previousEffect = CURRENT_EFFECT;
    CURRENT_EFFECT = this;

    try {
      this.callback();
    } finally {
      CURRENT_EFFECT = previousEffect;
    }
  }

  dispose() {
    this.disposed = true;
    this.cleanup();
  }
}

export function signal(initialValue) {
  return new Signal(initialValue);
}

export function effect(callback) {
  return new Effect(callback);
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

  createSignal(initialValue) {
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

  attachCSS(styles) {
    const style = document.createElement("style");
    style.textContent = styles;
    this.shadowRoot.appendChild(style);
    return style;
  }

  createElement(elementObj) {
    const { tag, children, text, ...attributes } = elementObj;

    const element = document.createElement(tag);

    if (text !== undefined) {
      if (text instanceof Signal) {
        effect(() => {
          element.textContent = text.get();
        });
      }
    }

    if (Object.keys(attributes).length) {
      for (const [key, value] of Object.entries(attributes)) {
        if (key === "id") {
          if (this.refs.has(value)) {
            console.warn(`Duplicate ref id detected: ${value}`);
          }
          this.refs.set(value, element);
          effect(() => {
            element[key] = value instanceof Signal ? value.get() : value;
          });
        } else if (key.startsWith("on_")) {
          const eventName = key.split("on_")[1];
          const { callback, ...options } = value;
          const boundCallback = callback.bind(this);
          element.addEventListener(eventName, boundCallback, options);
          this._trackEventListener(element, eventName, boundCallback);
        } else {
          effect(() => {
            element[key] = value instanceof Signal ? value.get() : value;
          });
        }
      }
    }

    if (children) {
      for (const child of children) {
        if (child instanceof Node) {
          element.appendChild(child);
        } else if (typeof child === "object" && child !== null && child.tag) {
          const childElement = this.createElement(child);

          element.appendChild(childElement);
        } else {
          effect(() => {
            element.appendChild(
              document.createTextNode(
                child instanceof Signal ? String(child.get()) : String(child),
              ),
            );
          });
        }
      }
    }

    return element;
  }
}
