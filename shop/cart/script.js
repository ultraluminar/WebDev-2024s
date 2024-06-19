import { Cart } from "../cart.js";
import { product_details } from "../product_details.js";

const table = document.getElementById("order-table");

function createRow(...values){
    const row = table.insertRow();
    values.forEach((value) => {
        row.insertCell().textContent = value;
    });
    
}

let sum = 0;
const cart = new Cart();

createRow("Item", "Count", "One", "Sum");

Object.entries(cart.order).forEach(([id, count]) => {
    let product_sum = product_details[id].price * count;
    sum += product_sum;

    createRow(id, count, product_details[id].price, `${product_sum} €`);
});

createRow("Gesammt", "", "", `${sum} €`);