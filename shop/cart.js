export class Cart {
    constructor(){
        this.key = "order";
        this.badge = document.getElementById("badge");

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
    }

    setBadge(count){
        this.count = count
        this.badge.innerHTML = count;
    }

    save(){
        let order_string = JSON.stringify(this.order);
        document.cookie = `${this.key}=${order_string};path=/`;
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