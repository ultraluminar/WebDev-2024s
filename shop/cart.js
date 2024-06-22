export class Cart {
    constructor(product_details) {
        this.product_details = product_details

        this.key = "order";
        this.badge = document.getElementById("badge");


        if (document.cookie === ""){
            // create and save empty cookie
            this.order = {};
            this.save();
        } else {
            // load orders from cookie
            let order_string = document.cookie.replace(`${this.key}=`, '');
            this.order = JSON.parse(order_string);
        }
        this.setBadge();
    }
    
    setBadge() {
        this.badge.innerHTML = Object.values(this.order).reduce((a, b) => a + b, 0)
    };

    save() {
        let order_string = JSON.stringify(this.order);
        document.cookie = `${this.key}=${order_string};path=/`;
    }

    set(id, count) {
        this.order[id] = count;
        this.setBadge();
        this.save();
    }

    add(id, count) {
        this.order[id] = (this.order[id] || 0) + count;
        this.setBadge();
        this.save();
    }

    delete(id) {
        delete this.order[id];
        this.setBadge();
        this.save();
    }
    
    clear() {
        this.order = {};
        this.setBadge();
        this.save();
    }

    getMax(id) {
        return 99 - (this.order[id] || 0);
    }

    getPriceSum() {
        return Object.entries(this.order)
            .map(([id, count]) => this.product_details[id].price * count)
            .reduce((a, b) => a + b, 0)
            .toFixed(2);
    }
}