var contacts_button = document.querySelector(".contacts-button");
var modal_letter = document.querySelector(".modal-letter");

contacts_button.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal_letter.classList.remove("modal-letter-close");
	user_name.focus();
});

var close_letter = document.querySelector(".modal-letter .close-window");

close_letter.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal_letter.classList.add("modal-letter-close");
	modal_letter.classList.remove("modal-error");
});
