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
}

ready(init);
