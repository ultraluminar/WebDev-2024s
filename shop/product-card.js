export class ProductCard {
    constructor(parent, id, img_src, img_alt, title, description, price, cart){
        const card = document.createElement("div");
        card.id = id;
        card.classList.add("product-card");
        parent.appendChild(card);

            const image = document.createElement("img");
            image.src = img_src;
            image.classList.add("product-image");
            image.alt = img_alt
            card.appendChild(image);

            const info = document.createElement("div");
            info.classList.add("product-info");
            card.appendChild(info);

                const heading = document.createElement("h3");
                heading.classList.add("product-title");
                heading.textContent = title;
                info.appendChild(heading);

                const paragraph = document.createElement("p");
                paragraph.classList.add("product-description");
                paragraph.textContent = description;
                info.appendChild(paragraph);

                const price_tag = document.createElement("p");
                price_tag.classList.add("product-price");
                price_tag.textContent = price;
                info.appendChild(price_tag);

            const buttons = document.createElement("div");
            buttons.classList.add("product-buttons");
            card.appendChild(buttons);

                const spinbox = document.createElement("div");
                spinbox.classList.add("custom-spinbox");
                buttons.appendChild(spinbox);

                    const button_decrement = document.createElement("button");
                    button_decrement.classList.add("spinbox-button", "spinbox-decrement");
                    spinbox.appendChild(button_decrement);

                        const minus = document.createElement("img");
                        minus.src = "../assets/shop/minus.svg";
                        image.alt = "Minus Symbol";
                        button_decrement.appendChild(minus);

                    const input = document.createElement("input");
                    input.type = "number";
                    input.classList.add("spinbox-input");
                    input.min = 1;
                    input.max = 99;
                    input.value = 1;
                    spinbox.appendChild(input);

                    const button_increment = document.createElement("button");
                    button_increment.classList.add("spinbox-button", "spinbox-increment");
                    spinbox.appendChild(button_increment);

                        const plus = document.createElement("img");
                        plus.src = "../assets/shop/plus.svg";
                        image.alt = "Plus Symbol";
                        button_increment.appendChild(plus);

                    button_decrement.addEventListener('click', () => {
                        input.value = Math.max(parseInt(input.value) - 1, 1);
                    });

                    button_increment.addEventListener('click', () => {
                        input.value = Math.min(parseInt(input.value) + 1, 99);
                    });

                    input.addEventListener('input', () => {
                        if (parseInt(input.value) < 1) input.value = 1;
                        else if (parseInt(input.value) > 99) input.value = 99;
                    });

                const button_cart = document.createElement("button");
                button_cart.classList.add("add-cart-button");
                button_cart.textContent = "In den Warenkorb";
                buttons.appendChild(button_cart);

                button_cart.addEventListener("click", () => {
                    cart.add(id, parseInt(input.value));
                    cart.save();
                });
    }
}