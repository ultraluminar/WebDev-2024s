class Order {
    constructor(){
        this.key = "order";
        this.badge = document.querySelector("#badge");

        if (document.cookie == ""){
            this.order = {};
            return;
        }
        
        let order_string = document.cookie.replace(`${this.key}=`, '');
        this.order = JSON.parse(order_string);

        let count = Object.values(this.order).reduce((a, b) => a + b);
        this.appendBadge(count);
    }

    appendBadge(count){
        this.badge.innerHTML = parseInt(this.badge.innerHTML) + count;
    }

    save(){
        let order_string = JSON.stringify(this.order);
        document.cookie = `${this.key}=${order_string}`;
    }

    add(id, count = 1){
        this.order[id] = (this.order[id] || 0) + count;
        this.appendBadge(count);
    }
}

let order = new Order();

document.querySelectorAll(".add-cart-button").forEach((button) => {
    let spinbox = button.parentElement.button_div.querySelector(".product-spinbox");
    let product_id = button.parentElement.parentElement.id;

    button.addEventListener("click", () => {
        order.add(id, spinbox.value);
        order.save();
    });
});
