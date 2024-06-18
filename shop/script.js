import { Cart } from "./cart.js";
import { ProductCard } from "./product-card.js";

const cart = new Cart();

const parent = document.getElementById("merch").querySelector(".section-body")
const img_src = "../assets/shop/merch/merch_1.webp";
const id = 69

const card = new ProductCard(
    parent, id, img_src, "TODO: alt", `Product ${id}`,
    "TODO: Beschreibung", "420.69€", cart
);
