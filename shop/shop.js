class Order {
    constructor(){
        this.key = "order";

        if (document.cookie === ""){
            this.order = {}
            this.count = 0;
            console.log("Cookie empty, count = 0");
        } else {
            let order_string = document.cookie.replace(`${this.key}=`, '');
            this.order = JSON.parse(order_string);
            // this.count = 0
            this.count = Object.values(this.order).reduce((a, b) => a + b, 0);
            console.log(`Cookie not empty, count = ${this.count}`);
        }
    }

    add(item, count=1){
        this.order[item] = (this.order[item] || 0) + count;
        this.count = this.count + count;
        console.log(`+${count} => ${this.count}`);
    }

    save(){
        let order_string = JSON.stringify(this.order);
        document.cookie = `${this.key}=${order_string}`;
    }

}

let order = new Order("order");

order.add(6);
order.add(6);

order.add(4, 15);


order.save();