// function ready(callback) {
//   if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", callback);
//   } else {
//     callback();
//   }
// }

const modalButton = document.querySelectorAll(".modal-button");
const closeButton = document.querySelectorAll(".close");
const modal = document.querySelectorAll(".modal");

console.log("modalButton", modalButton);
console.log("modalButton", closeButton);
console.log("modal", modal);

modalButton.forEach((item) => {
  item.addEventListener("click", () => {
    open(item.parentNode.dataset.id);
  });
});

closeButton.forEach((item) => {
  item.addEventListener("click", () => {
    close(item.parentNode.dataset.id);
  });
});

// toggle force parameter class List einbauen

function toggleVisibility(id) {
  modal.forEach((item) => {
    if (item.parentNode.dataset.id === id) {
      item.style.display = "block";
    }
  });
}

function open(id) {
  modal.forEach((item) => {
    if (item.parentNode.dataset.id === id) item.style.display = "block";
  });
}

function close(id) {
  modal.forEach((item) => {
    if (item.parentNode.dataset.id === id) {
      item.removeAttribute("style");
      item.style.display = "none";
    }
  });
}
