import { Cart } from "../cart.js";

const table = document.getElementById("order-table");

const header_row = table.insertRow();
const header_data = ["Item", "Price"];
header_data.forEach((data) => {
    header_row.insertCell().outerHTML = '<th>' + data + '</th>';
});

const cart = new Cart();

let sum = 0;
Object.entries(cart.order).forEach((keyvalue) => {
    const row = table.insertRow();
    keyvalue.forEach((field) => {
        const cell = row.insertCell();
        cell.textContent = field;
    });
});