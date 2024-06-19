import { Cart } from "./cart.js";

const cart = new Cart();

function create(tagName, parent, _class){
    const element = document.createElement(tagName);
    if (_class !== undefined) element.classList.add(_class);
    parent.appendChild(element);
    return element;
}

export function createCard(parent, id, title, description, price, img_src, img_alt){
        const card = create("div", parent, "product-card")
        card.id = id;

            const image = create("img", card, "product-image");
            image.src = img_src;
            image.alt = img_alt;

            const info = create("div", card, "product-info");

                const heading = create("h3", info, "product-title");
                heading.textContent = title;

                const paragraph = create("p", info, "product-description");
                paragraph.textContent = description;

                const price_tag = create("p", info, "product-price");
                price_tag.textContent = `${price}€`;

            const buttons = create("div", card, "product-buttons");

                const spinbox = create("div", buttons, "custom-spinbox");

                    const button_decrement = create("button", spinbox, "spinbox-button");

                        const minus = create("img", button_decrement);
                        minus.src = "../assets/shop/minus.svg";
                        minus.alt = "Minus Symbol";

                    const input = create("input", spinbox, "spinbox-input");
                    input.type = "number";
                    input.min = 1;
                    input.max = 99;
                    input.value = 1;

                    const button_increment = create("button", spinbox, "spinbox-button");

                        const plus = create("img", button_increment);
                        plus.src = "../assets/shop/plus.svg";
                        plus.alt = "Plus Symbol";

                    button_decrement.addEventListener('click', () => {
                        input.value = Math.max(parseInt(input.value || 0) - 1, 1);
                    });

                    button_increment.addEventListener('click', () => {
                        input.value = Math.min(parseInt(input.value || 0) + 1, 99);
                    });

                    input.addEventListener('input', () => {
                        if (parseInt(input.value) < 1) input.value = 1;
                        else if (parseInt(input.value) > 99) input.value = 99;
                    });

                const button_cart = create("button", buttons, "add-cart-button");
                button_cart.textContent = "In den Warenkorb";

                button_cart.addEventListener("click", () => {
                    cart.add(id, parseInt(input.value));
                    cart.save();
                });
}
