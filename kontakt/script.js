const inputs = document.querySelectorAll(".input-input");

const submit_button = document.getElementById("submit-button");
const close_popup_button = document.getElementById("close-popup");

const popup = document.getElementById("popup");
const popup_background_filter = document.getElementById("popup-background-filter");
const popup_container = document.getElementById("popup-container");

submit_button.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = "";
    });
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
