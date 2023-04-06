// function ready(callback) {
//   if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", callback);
//   } else {
//     callback();
//   }
// }

const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

openModalButton.addEventListener("click", open);
closeModalButton.addEventListener("click", close);

function open() {
  modal.style.display = "block";
}

function close() {
  modal.style.display = "none";
}
