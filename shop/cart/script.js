import { getProductDetails } from "../product_details.js";
import { Cart } from "../cart.js";

const product_details = getProductDetails("../../assets");
const cart = new Cart(product_details);

// update invoice
const button_buy = document.getElementById("buy-button");
const sub_total_price_tr = document.getElementById("sub-total-price");
const total_price_tr = document.getElementById("total-price");

function setInvoice(){
    let price = cart.getPriceSum();
    if (Object.keys(cart.order).length === 0) button_buy.disabled = true;

    let price_string = `${price} €`;
    sub_total_price_tr.textContent = price_string;
    total_price_tr.textContent = price_string;
}

// create cart-card
const template_cart_card = document.getElementById("cart-card-template");
const cart_card_container = document.querySelector(".card-container");

function createCartCard([id, count]){
    let product = product_details[id];
    const cart_card_clone = template_cart_card.content.cloneNode(true);

    const cart_card = cart_card_clone.querySelector(".cart-card");
    cart_card.id = product.id;

    // TODO: add cart-card-sized images
    const image = cart_card.querySelector(".cart-card-image");
    image.src = product.img_src;
    image.alt = product.img_alt;

    cart_card.querySelector(".cart-card-heading").textContent = product.title;
    cart_card.querySelector(".cart-card-price").textContent = `${product.price} €`;

    const input = cart_card.querySelector(".spinbox-input");
    input.value = count;

    input.addEventListener("keydown", (event) => {
        if ("+-,. eE".includes(event.key)) event.preventDefault();
    });

    input.addEventListener("input", (event) => {
        switch (event.inputType){
            case "insertText": break;
            case "deleteContentBackward": break;
            default: return;
        }
        let value = (input.value === "") ? 1 : parseInt(input.value);

        if (value < 1) input.value = 1;
        if (value > 99) input.value = 99;

        cart.set(product.id, value);
        setInvoice();
    });

    input.addEventListener("change", (event) => {
        if (input.value === "") {
            input.value = 1;
            cart.set(product.id, 1);
            setInvoice();
        }
    });

    cart_card.querySelector(".spinbox-minus").addEventListener("click", () => {
        let value = parseInt(input.value);
        if (value === 1) return;

        input.value = value - 1;
        cart.add(product.id, -1);
        setInvoice();
    });

    cart_card.querySelector(".spinbox-plus").addEventListener("click", () => {
        let value = parseInt(input.value);
        if (value === 99) return;

        input.value = value + 1;
        cart.add(product.id, 1);
        setInvoice();
    });
    
    cart_card.querySelector(".cart-card-remove").addEventListener("click", () => {
        cart.delete(product.id);
        cart_card.remove();
        setInvoice();
    });

    cart_card_container.appendChild(cart_card_clone);
    return cart_card;
}

// on buy
const popup = document.getElementById("popup");

button_buy.addEventListener('click', () => {
    cart.clear();
    setInvoice();
    cart_card_container.innerHTML = "";
    popup.classList.add("open");
});

popup.addEventListener("click", () => {
    popup.classList.remove("open");
});

// generate card-card's from order
Object.entries(cart.order).forEach(createCartCard);

setInvoice();