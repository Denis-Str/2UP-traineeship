var linkMenu = document.querySelector(".btnMainNav");
var popupMenu = document.querySelector(".mainNav");
// var closeMenu = document.querySelector(".btnMainNav");

linkMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMenu.classList.add("modal-show");
});

// closeMenu.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popupMenu.classList.remove("modal-show");
// });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMenu.classList.contains("modal-show")) {
      popupMenu.classList.remove("modal-show");
    }
  }
});

// var CruiseLink = document.querySelector(".CruiseLinkActive");
// var cardContent = document.querySelector(".cardContent");
// var closeСard = document.querySelector(".popupClose");

// CruiseLink.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   cardContent.classList.add("modal-show");
// });

// closeСard.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   cardContent.classList.remove("popup-show");
// });

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     evt.preventDefault();
//     if (cardContent.classList.contains("popup-show")) {
//       cardContent.classList.remove("popup-show);
//     }
//   }
// });