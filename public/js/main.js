import * as Modal from "./components/modal.js";

function ready(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

function init() {
  return Modal.modal;
}

ready(init);

const tagInput = document.querySelector("#tagInput");

tagInput.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    console.log("Space pressed");
    console.log(event.target.value);
  }
});

const filterButton = document.querySelectorAll(".label-button");

function getFilterArray() {
  let tempArray = [];

  filterButton.forEach((label) => {
    console.log(label.innerText);
    label.addEventListener("click", () => {
      console.log("CLICKED");
      tempArray.push(label.innerText);
      console.log("tempArray:", tempArray);
    });
  });

  return tempArray;
}

console.log(getFilterArray());

// const filteredArray = getFilterArray();

const noteTags = document.querySelectorAll(".note-tags");
const singleNote = document.querySelector(".single-note");

console.log(singleNote);

// noteTags.forEach((item) => {
//   if (filteredArray.includes(item.innerText.split(","))) {
//     console.log("TEST");
//     singleNote.classList.add("hidden");
//   }
//   console.log("item.innerText:", item.innerText.split(","));
// });

// build search object
// check if search object includes stuff
const searchForm = document.querySelector(".search-form");
console.log(searchForm);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("SUBMIT");
  const formData = new FormData(searchForm);
  console.log(formData);
});

export function includesAll(str, arr) {
  for (const element of arr) {
    if (!str.includes(element)) {
      return false;
    }
  }
  return true;
}

export function createStringFilter(data, searchObject) {
  let searchTerm = searchObject.search;
  let searchSplit = searchTerm.toLowerCase().split(" ");

  searchSplit = searchSplit.filter((substring) => substring !== "");

  return data.filter((obj) => {
    let searchTarget = `${obj.title} ${obj.company}`;

    return includesAll(searchTarget.toLowerCase(), searchSplit);
  });
}
