export class Cart {
    constructor(){
        this.key = "order";
        this.badge = document.getElementById("badge");

        if (document.cookie == ""){
            this.order = {};
            this.count = 0;
            return;
        }
        
        let order_string = document.cookie.replace(`${this.key}=`, '');
        this.order = JSON.parse(order_string);

        let count = Object.values(this.order).reduce((a, b) => a + b);
        if (parseInt(this.badge.innerHTML) !== count) this.setBadge(count);
    }

    setBadge(count){
        this.count = count
        this.badge.innerHTML = count;
    }
    
    add(id, count = 1){
        this.order[id] = (this.order[id] || 0) + count;
        this.setBadge(this.count + count);

    }

    save(){
        let order_string = JSON.stringify(this.order);
        document.cookie = `${this.key}=${order_string}`;
    }
}