import { Cart } from "../cart.js";
import { prices } from "../prices.js";

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
    let product_sum = prices[id] * count;
    sum += product_sum;

    createRow(id, count, prices[id], `${product_sum} €`);
});

createRow("Gesammt", "", "", `${sum} €`);