import { createCard } from "./product-card.js";
import { prices } from "./prices.js";

const parent = document.querySelector("#merch");
console.log(document);
const img_src = "../assets/shop/merch/merch_1.webp";
const img_alt = "TODO: alt";
const description = "TODO: Beschreibung";

for (let id = 0; id <= 10; id++){
    createCard(parent, id, `Product #${id}`, description, `${prices[id]}€`, img_src, img_alt);
}