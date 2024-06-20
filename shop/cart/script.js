import { Cart } from "../cart.js";
import { createCartCard } from "../product-card.js";
import { getProductDetails } from "../product_details.js";

const button_buy = document.getElementById("buy-button");
const popup = document.getElementById("popup");

button_buy.addEventListener('click', () => {
    popup.classList.add("open");
});

popup.addEventListener("click", () => {
    popup.classList.remove("open");
});

const product_details = getProductDetails("../../assets");

const on_save = {
    product_details: product_details,
    sub_total: document.getElementById("sub-total-price"),
    total: document.getElementById("total-price"),
    button_buy: button_buy
}

const cart = new Cart(on_save);
const parent = document.querySelector("#bestellungen").querySelector(".section-body");

Object.entries(cart.order).forEach(([id, count]) => {
    createCartCard(cart, parent, ...Object.values(product_details[id]));
});

