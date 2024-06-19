export class Cart {
    constructor(on_save){
        this.key = "order";
        this.badge = document.getElementById("badge");
        
        if (on_save){
            this.sub_total = on_save.sub_total;
            this.total = on_save.total;
            this.product_details = on_save.product_details;
            this.callback = true;
        } else {
            this.callback = false;
        }

        if (document.cookie === ""){
            this.order = {};
            return;
        }
        
        let order_string = document.cookie.replace(`${this.key}=`, '');
        this.order = JSON.parse(order_string);

        
        if (Object.keys(this.order).length > 0){
            let count = Object.values(this.order).reduce((a, b) => a + b);
            this.setBadge(count)
        } else {
            this.setBadge(0);
        }
        this.save();
    }

    setBadge(count){
        this.count = count
        this.badge.innerHTML = count;
    }

    save(){
        let order_string = JSON.stringify(this.order);
        document.cookie = `${this.key}=${order_string};path=/`;

        if (this.callback){
            let sum = 0;
            Object.entries(this.order).forEach(([id, count]) => {
                sum += this.product_details[id].price * count;

                // TODO: round
                this.sub_total.textContent = `${sum}€`;
                this.total.textContent = `${sum}€`;
            });
        }
    }

    set(id, count){
        this.setBadge(this.count - (this.order[id] || 0) + count);
        this.order[id] = count;
        this.save();

    }
    
    add(id, count = 1){
        this.order[id] = (this.order[id] || 0) + count;
        this.setBadge((this.count || 0) + count);
        this.save();
    }

    delete(id){
        this.setBadge(this.count - this.order[id]);
        delete this.order[id];
        this.save();
    }
}