class CustomBaseElement extends HTMLElement {
  static cssMap = new Map();
  constructor() {
    super();
    this.ref = {}; // lookup of shadown dom elements registered with ids
    this.eventListenersMap = new WeakMap();
    this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    (async () => {
      if (this.onMount) {
        await this.onMount();
      }
    })();
  }

  disconnectedCallback() {
    (async () => {
      if (this.onUnMount) {
        await this.onUnMount();
      }
      this._removeAllEventListeners();
      this.ref = {};
      this.eventListenersMap = {};
    })();
  }

  adoptedCallback() {}

  createElement(layoutTree) {
    /* recursive DOM tree creating function */
  }

  addEventListener() {}

  removeEventListener() {}

  _removeAllEventListeners() {}

  attachCSS() {}
}

customElements.define("base-element", CustomBaseElement);
