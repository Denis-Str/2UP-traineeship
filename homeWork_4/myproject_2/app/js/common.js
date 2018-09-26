// вариант 1
// var openMenu = document.querySelector(".button_menu");
// var menuForm = document.querySelector(".main-menu_list");
// var closeMenu = document.querySelector(".menu_close");

// openMenu.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     menuForm.classList.add("modal-show");
// });

// closeMenu.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     menuForm.classList.remove("modal-show");
// })

// window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27) {
//         evt.preventDefault();
//         if (menuForm.classList.contains("modal-show")) {
//             menuForm.classList.remove("modal-show");
//         }
//     }
// });

// вариант 2

function menu_clikc() {
	var menu = document.querySelector(".page-header__main-menu");

	if (menu.style.visibility == "visible"){
		menu.style.visibility = "hidden";
	}
	else {
		menu.style.visibility = "visible";
	}
}