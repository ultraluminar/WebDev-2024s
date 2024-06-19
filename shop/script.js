import { createCard } from "./product-card.js";
import { product_details } from "./product_details.js";

const parent = document.querySelector("#merch").querySelector(".section-body");

product_details.forEach((product) => {
    createCard(parent, ...Object.values(product));
});