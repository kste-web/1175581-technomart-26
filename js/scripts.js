var map_small = document.querySelector(".map-small");
var modal_map = document.querySelector(".modal-map");
var close_map = document.querySelector(".modal-map .close-window");
var contacts_button = document.querySelector(".contacts-button");
var modal_letter = document.querySelector(".modal-letter");
var user_name = modal_letter.querySelector(".modal-letter-name input[name = user-name]");
var close_letter = document.querySelector(".modal-letter .close-window");

map_small.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal_map.classList.add("modal-map-show");
	modal_map.classList.remove("modal-map-close");
});

close_map.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal_map.classList.add("modal-map-close");
	modal_map.classList.remove("modal-map-show");
});

contacts_button.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal_letter.classList.add("modal-letter-show");
	modal_letter.classList.remove("modal-letter-close");
	user_name.focus();
});

close_letter.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal_letter.classList.add("modal-letter-close");
	modal_letter.classList.remove("modal-letter-show");
});
