import { Cart } from "../cart.js";
import { createCartCard } from "../product-card.js";
import { getProductDetails } from "../product_details.js";


const product_details = getProductDetails("../../assets");

const on_save = {
    product_details: product_details,
    sub_total: document.getElementById("sub-total-price"),
    total: document.getElementById("total-price"),
    button_buy: document.getElementById("buy-button")
}

const cart = new Cart(on_save);
const parent = document.querySelector("#bestellungen").querySelector(".section-body");

Object.entries(cart.order).forEach(([id, count]) => {
    createCartCard(cart, parent, ...Object.values(product_details[id]));
});