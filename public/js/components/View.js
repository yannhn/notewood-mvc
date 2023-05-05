// class View {
//   constructor() {
//     this._openSelectView = document.querySelector(".select-view-button");
//     this._closeSelectView = document.querySelector(".select-view-close");
//     this._selectView = document.querySelector(".select-view");
//     this.addEventListener();
//   }

//   addEventListener() {
//     this._openSelectView.addEventListener("click", this.openView.bind(this));
//     this._closeSelectView.addEventListener("click", this.closeView.bind(this));
//     window.addEventListener("click", this.outsideClick.bind(this));
//   }

//   openView() {
//     this._selectView.style.width = "250px";
//     this._selectView.style.borderLeft = "2px solid #262730";
//   }

//   closeView() {
//     this._selectView.style.width = "0";
//     this._selectView.style.borderLeft = "none";
//   }

//   outsideClick(event) {
//     if (event.target === this._selectView) {
//       this.closeView();
//     }
//   }
// }

// const viewSelect = new View();

// export { viewSelect };
