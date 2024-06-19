import { createCard } from "./product-card.js";
import { getProductDetails } from "./product_details.js";
import { Cart } from "./cart.js";

const parent = document.querySelector("#merch").querySelector(".section-body");
const product_details = getProductDetails("../assets");

const cart = new Cart();

product_details.forEach((product) => {
    createCard(cart, parent, ...Object.values(product));
});