import { Cart } from "./cart.js";


function create(tagName, parent, _class){
    const element = document.createElement(tagName);
    if (_class !== undefined) element.classList.add(_class);
    parent.appendChild(element);
    return element;
}

function createSpinBox(parent, path_assets, minus_event = () => {}, plus_event = () => {}, change_event = () => {}){
    const spinbox = create("div", parent, "custom-spinbox");

        const button_decrement = create("button", spinbox, "spinbox-button");

            const minus = create("img", button_decrement, "spinbox-minus");
            minus.src = `${path_assets}/shop/minus.svg`;
            minus.alt = "Minus Symbol";

        const input = create("input", spinbox, "spinbox-input");
        input.type = "number";
        input.min = 1;
        input.max = 99;
        input.value = 1;

        const button_increment = create("button", spinbox, "spinbox-button");

            const plus = create("img", button_increment, "spinbox-plus");
            plus.src = `${path_assets}/shop/plus.svg`;
            plus.alt = "Plus Symbol";

        button_decrement.addEventListener('click', () => {
            let value = parseInt(input.value);
            if (value !== 1){
                minus_event();
                input.value = value - 1;
            } else {
                input.value = 1
            }
        });

        button_increment.addEventListener('click', () => {
            let value = parseInt(input.value);
            if (value !== 99){
                plus_event();
                input.value = value + 1;
            } else {
                input.value = 99;
            }
        });

        input.addEventListener('input', () => {
            let value = input.value.replace("[^0-9]", "");
            if (value === ""){
                return;
            }
            
            value = parseInt(input.value);
            if (value < 1){
                input.value = 1;
            }
            if (value > 99){
                input.value = 99;
            }
        });

        input.addEventListener("change", () => {
            if (input.value === "") input.value = 1;

            let value = parseInt(input.value);
            if (value < 1) return;
            if (value > 99) return;
            change_event(value);
        });

    return spinbox;
}

export function createCartCard(cart, parent, id, title, description, price, img_src, img_alt){
    const cart_card = create("div", parent, "cart-card");
    cart_card.id = id;

        const image = create("img", cart_card, "cart-card-image");
        image.src = "../../assets/main_logo/main_logo_128.png";
        image.alt = img_alt;
        image.height = 128;

        const body = create("div", cart_card, "cart-card-body");

            const heading = create("h3", body, "cart-card-title");
            heading.textContent = title;

            const price_tag = create("p", body, "cart-card-price");
            price_tag.textContent = `${price}€`;

            const spinbox = createSpinBox(
                body, "../../assets", 
                (value) => cart.add(id, -1), 
                (value) => cart.add(id, 1),
                (value) => cart.set(id, value)
            );

            const remove = create("button", body, "cart-card-remove");
            
                const trashcan = create("img", remove);
                trashcan.src = "../../assets/shop/cart/delete.svg";
                trashcan.alt = "Mülltonnen Symbol";
                trashcan.height = 30;
            
            remove.addEventListener("click", () => {
                cart.delete(id);
                cart_card.remove();
            });

            const input = spinbox.querySelector(".spinbox-input");
            input.value = cart.order[id];
            // input.addEventListener("change", () => {
            //     console.log(input.value);
            // });

            const plus = spinbox.querySelector(".spinbox-plus");
            


}

export function createCard(cart, parent, id, title, description, price, img_src, img_alt){
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

            const spinbox = createSpinBox(buttons, "../assets");

            const button_cart = create("button", buttons, "add-cart-button");
            button_cart.textContent = "In den Warenkorb";

            const input = spinbox.querySelector(".spinbox-input")
            button_cart.addEventListener("click", () => {
                cart.add(id, parseInt(input.value));
                cart.save();
            });

    return card;
}
