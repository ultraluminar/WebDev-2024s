import { getProductDetails } from "./product-details.js";
import { Cart } from "./cart.js";

const product_details = getProductDetails("../assets");
const cart = new Cart(product_details);

// create product-card
const template_product_card = document.getElementById("product-card-template");

const cart_card_container = {
    merch: document.getElementById("merch").querySelector(".card-container"),
    tickets: document.getElementById("tickets").querySelector(".card-container")
};

function createProductCard(product){
    const product_card_clone = template_product_card.content.cloneNode(true);

    const product_card = product_card_clone.querySelector(".product-card");
    product_card.id = "product-card-" + product.id;

    const product_image = product_card.querySelector(".product-image");
    product_image.src = product.img_src;
    product_image.alt = product.img_alt;

    product_card.querySelector(".product-title").textContent = product.title;
    product_card.querySelector(".product-description").textContent = product.description;
    product_card.querySelector(".product-price").textContent = `${product.price} €`;

    const input = product_card.querySelector(".spinbox-input");

    input.addEventListener("keydown", (event) => {
        if ("+-,. eE".includes(event.key)) event.preventDefault();
    });

    input.addEventListener("input", (event) => {
        if (event.inputType !== "insertText") return;

        let max = cart.getMax(product.id);
        let value = parseInt(input.value);

        if (value < 1) input.value = 1;
        if (value > max) input.value = max;
    });

    input.addEventListener("change", (event) => {
        if (input.value === "") input.value = 0;
    });

    product_card.querySelector(".spinbox-minus").addEventListener("click", () => {
        let value = parseInt(input.value);
        if (value !== 1) input.value = value - 1;
    });

    product_card.querySelector(".spinbox-plus").addEventListener("click", () => {
        let value = parseInt(input.value);
        let max = cart.getMax(product.id);

        input.value = (value >= max) ? max : value + 1;
    });

    product_card.querySelector(".add-cart-button").addEventListener("click", () => {
        let value = parseInt(input.value);
        cart.add(product.id, value);
        let max = cart.getMax(product.id);
        if (value > max) input.value = max;

    });


    cart_card_container[product.type].appendChild(product_card_clone);
    return product_card;
}

// let product_cards = product_details.map(createProductCard);
product_details.forEach(createProductCard);
