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

const modal = new Modal();

export { modal };
