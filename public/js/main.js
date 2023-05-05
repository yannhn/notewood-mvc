function ready(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

function init() {
  console.log("READY");
}

class Modal {
  constructor() {
    this._openModalButton = document.querySelector(".open-modal");
    this._closeModalButton = document.querySelector(".close-modal");
    this._modal = document.querySelector(".modal");
    this.addEventListeners();
  }

  addEventListeners() {
    if (this._openModalButton) {
      this._openModalButton.addEventListener(
        "click",
        this.openModal.bind(this)
      );
      this._closeModalButton.addEventListener(
        "click",
        this.closeModal.bind(this)
      );
      window.addEventListener("click", this.outsideClick.bind(this));
    }
  }

  openModal() {
    this._modal.style.display = "block";
  }

  closeModal() {
    this._modal.style.display = "none";
  }

  outsideClick(event) {
    if (event.target === this._modal) {
      this.closeModal();
    }
  }
}

class View {
  constructor() {
    this._openSelectView = document.querySelector(".select-view-button");
    this._closeSelectView = document.querySelector(".select-view-close");
    this._selectView = document.querySelector(".select-view");
    this.addEventListener();
  }

  addEventListener() {
    this._openSelectView.addEventListener("click", this.openView.bind(this));
    this._closeSelectView.addEventListener("click", this.closeView.bind(this));
    window.addEventListener("click", this.outsideClick.bind(this));
  }

  openView() {
    this._selectView.style.width = "250px";
    this._selectView.style.borderLeft = "2px solid #262730";
  }

  closeView() {
    this._selectView.style.width = "0";
    this._selectView.style.borderLeft = "none";
  }

  outsideClick(event) {
    if (event.target === this._selectView) {
      this.closeView();
    }
  }
}

const viewSelect = new View();

const modal = new Modal();

ready(init);
