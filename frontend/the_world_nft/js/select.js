class Select {
  /**
   * @param {HTMLSelectElement} select 主控件
   * @param {Array<Option>} optionNodes 选项
   */
  constructor(select, optionNodes, defaultSelectIndex) {
    this.el = document.createElement("button");
    this.el.classList.add("cus-select");

    this.options = document.createElement("ul");
    this.options.classList.add("cus-options");
    this.parentElement = select.parentElement;
    this.parentElement.appendChild(this.el);
    this.parentElement.appendChild(this.options);
    defaultSelectIndex == null
      ? (this.el.textContent = "Default")
      : (this.el.textContent = options[defaultSelectIndex].el.textContent);
    this.status = false;

    this.selectIndex = defaultSelectIndex;

    optionNodes.forEach((option, index) => {
      this.options.appendChild(option.el);
      option.el.addEventListener("click", () => {
        if (index === this.selectIndex) return;
        this.selectIndex = index;
        this.el.textContent = optionNodes[index].el.textContent;
        option.eventHandle();
      });
    });

    // bind this
    this.showOptions = this.showOptions.bind(this);
    this.hiddenOptions = this.hiddenOptions.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);

    this.el.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleOptions();
    });
    this.options.hidden = !this.status;
  }

  toggleOptions() {
    if (this.status) {
      this.hiddenOptions();
    } else {
      this.showOptions();
    }
  }

  showOptions() {
    this.status = true;
    this.options.hidden = !this.status;
    document.documentElement.addEventListener("click", this.hiddenOptions);
  }

  hiddenOptions() {
    this.status = false;
    this.options.hidden = !this.status;
    document.documentElement.removeEventListener("click", this.hiddenOptions);
  }
}

class Option {
  /**
   * @param {HTMLOptionElement} option
   * @param {CallableFunction} fn
   */
  constructor(option, fn) {
    this.eventHandle = fn.bind(this);

    this.el = document.createElement("li");
    this.el.classList.add("cus-option");
    this.el.textContent = option.textContent;
  }
}

export { Select, Option };
