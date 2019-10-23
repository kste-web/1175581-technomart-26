var map_small = document.querySelector(".map-small");
var modal_map = document.querySelector(".modal-map");

map_small.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal_map.classList.add("modal-map-show");
	modal_map.classList.remove("modal-map-close");
});

var close_map = document.querySelector(".modal-map .close-window");

close_map.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal_map.classList.add("modal-map-close");
	modal_map.classList.remove("modal-map-show");
});