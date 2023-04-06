class Modal {
  constructor() {
    this._openModalButton = document.querySelector(".open-modal");
    this._closeModalButton = document.querySelector(".close-modal");
    this._modal = document.querySelector(".modal");
    this.addEventListeners();
  }

  addEventListeners() {
    this._openModalButton.addEventListener("click", this.open.bind(this));
    this._closeModalButton.addEventListener("click", this.close.bind(this));
    window.addEventListener("click", this.outsideClick.bind(this));
  }

  open() {
    this._modal.style.display = "block";
  }

  close() {
    this._modal.style.display = "none";
  }

  outsideClick(event) {
    if (event.target === this._modal) {
      this.close();
    }
  }
}

function init() {
  const modal = new Modal();
  return modal;
}

function ready(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

ready(init);
