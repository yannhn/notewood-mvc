import * as Modal from "./components/modal.js";
import * as View from "./components/View.js";

function ready(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

function init() {
  console.log("READY");

  return Modal.modal;
}

View.viewSelect;

ready(init);

// const openSelectView = document.querySelector(".select-view-button");
// const closeSelectView = document.querySelector(".select-view-close");
// const selectView = document.querySelector(".select-view");

// openSelectView.addEventListener("click", () => {
//   console.log("CLICKED");
//   selectView.classList.toggle("hidden");
//   // selectView.style.width = "250px";
//   // selectView.style.width = "0";
// });
// if (selectView.classList.contains("hidden")) {
//   selectView.style.width = "250px";
// }

// closeSelectView.addEventListener("click", () => {
//   selectView.classList.toggle("hidden");
// });

// const tagInput = document.querySelector("#tagInput");
// const filterButton = document.querySelectorAll(".label-button");
// const filterCheckbox = document.querySelectorAll(".filter-checkbox");
// const noteTags = document.querySelectorAll(".note-tags");
// const singleNote = document.querySelectorAll(".single-note");
// const searchForm = document.querySelector(".search-form");

// filterCheckbox.forEach((checkbox) => {
//   console.log("filterCheckbox", checkbox.value);
// });

// tagInput.addEventListener("keyup", (event) => {
//   if (event.code === "Space") {
//     console.log("Space pressed");
//     console.log(event.target.value);
//   }
// });

// console.log("noteTags", noteTags);
// console.log("singleNote", singleNote);

// function getFilterTags() {
//   let tempArray = [];

//   filterButton.forEach((label) => {
//     label.addEventListener("click", () => {
//       label.classList.toggle("active");

//       if (label.classList.contains("active")) {
//         tempArray.push(label.innerText);
//       } else if (
//         !label.classList.contains("active") &&
//         tempArray.includes(label.innerText)
//       ) {
//         tempArray.splice(tempArray.indexOf(label.innerText), 1);
//       }
//       console.log("tempArray:", tempArray);

//     });

//   });

//   console.log("tempArray2:", tempArray);
//   return tempArray;
// }

// console.log(getFilterTags());

// // get tag values from input
// searchForm.addEventListener("change", (event) => {
//   event.preventDefault();
//   console.log("SUBMIT");

//   const formData = new FormData(searchForm);
//   console.log(formData.getAll("searchTags"));

//   let newSearchObject = {};

//   formData.append("tags", JSON.stringify(tagInput.value));

//   newSearchObject.tagInput = formData.getAll(JSON.stringify(tagInput.value));
//   // console.log(formData);

//   console.log("newSearchObject:", newSearchObject);
// });
