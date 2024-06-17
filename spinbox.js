const input = document.querySelector('.spinbox-input');

document.querySelector('.spinbox-increment').addEventListener('click', () => {
    input.value = Math.min(parseInt(input.value) + 1, 99);
});

document.querySelector('.spinbox-decrement').addEventListener('click', () => {
    input.value = Math.max(parseInt(input.value) - 1, 1);
});

document.querySelector('.spinbox-input').addEventListener('input', () => {
    if (parseInt(input.value) < 1) {
        input.value = 1;
        return;
    }
    if (parseInt(input.value) > 99) {
        input.value = 99;
    }
});
