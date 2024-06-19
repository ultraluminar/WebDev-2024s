import { Cart,  } from "../cart.js";
import { createCartCard } from "../product-card.js";
import { getProductDetails } from "../product_details.js";

const parent = document.querySelector("#bestellungen").querySelector(".section-body");

let sum = 0;
const cart = new Cart();
const product_details = getProductDetails("../../assets");

Object.entries(cart.order).forEach(([id, count]) => {
    let product = product_details[id];
    createCartCard(parent, ...Object.values(product));

    let product_sum = product.price * count;
    sum += product_sum;
});