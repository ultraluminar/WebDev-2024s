import { Cart } from "./cart.js";

const cart = new Cart();

//TODO: generate product tiles

document.querySelectorAll(".add-cart-button").forEach((button) => {
    let spinbox = button.parentElement.querySelector(".spinbox-input");
    let product_id = button.parentElement.parentElement.id;

    button.addEventListener("click", () => {
        cart.add(product_id, parseInt(spinbox.value));
        cart.save();
    });
});