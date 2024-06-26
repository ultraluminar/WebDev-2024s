const form = document.getElementById("fanpost-form");

const popup = document.getElementById("popup");
const popup_background_filter = document.getElementById("popup-background-filter");
const popup_container = document.getElementById("popup-container");
const close_popup_button = document.getElementById("close-popup");

form.addEventListener("submit", (event) => {
    form.reset();
    popup.classList.add("open");
    popup_background_filter.classList.add("open");
    popup_container.classList.add("open");
});

close_popup_button.addEventListener('click', () => {
    closePopup();
});

popup_background_filter.addEventListener("click", () => {
    closePopup();
});

function closePopup(){
    popup.classList.remove("open");
    popup_background_filter.classList.remove("open");
    popup_container.classList.remove("open");
}
