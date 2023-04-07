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

const tagInput = document.querySelector("#tagInput");

tagInput.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    console.log("Space pressed");
    console.log(event.target.value);
  }
});

const labelButton = document.querySelectorAll(".label-button");

let tempArray = [];

labelButton.forEach((label) => {
  console.log(label.innerText);
  tempArray.push(label.innerText);
  label.addEventListener("click", () => {
    console.log("CLICKED");
    tempArray.push(label.innerText);
  });
});

console.log("tempArray:", tempArray);

const noteTags = document.querySelectorAll(".note-tags");
const singleNote = document.querySelector(".single-note");

console.log(singleNote);

noteTags.forEach((item) => {
  if (tempArray.includes(item.innerText.split(","))) {
    console.log("TEST");
    singleNote.classList.add("hidden");
  }
  console.log("item.innerText:", item.innerText.split(","));
});
