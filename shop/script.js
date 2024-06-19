import { createCard } from "./product-card.js";
import { getProductDetails } from "./product_details.js";

const parent = document.querySelector("#merch").querySelector(".section-body");
const product_details = getProductDetails("../assets");

product_details.forEach((product) => {
    createCard(parent, ...Object.values(product));
});