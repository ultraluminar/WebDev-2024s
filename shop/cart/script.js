import { Cart } from "../cart.js";
import { createCartCard } from "../product-card.js";
import { getProductDetails } from "../product_details.js";

const parent = document.querySelector("#bestellungen").querySelector(".section-body");

const sub_total = document.getElementById("sub-total-price");
const total = document.getElementById("total-price");

const product_details = getProductDetails("../../assets");

const on_save = {
    product_details: product_details,
    sub_total: sub_total,
    total: total
}

const cart = new Cart(on_save);

Object.entries(cart.order).forEach(([id, count]) => {
    createCartCard(cart, parent, ...Object.values(product_details[id]));
});