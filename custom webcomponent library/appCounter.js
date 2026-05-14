import { BaseElement } from "./basePrimitives.js";

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

    this.count = this.createSignal(1);

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
              this.count.set(+this.count.get() + 1);
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
