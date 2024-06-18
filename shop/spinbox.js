const buttons_increment = document.getElementsByClassName('spinbox-increment');
const buttons_decrement = document.getElementsByClassName('spinbox-decrement');
const inputs = document.getElementsByClassName('spinbox-input');

for (let index = 0; index < inputs.length; index++){
    let input = inputs[index];

    buttons_increment[index].addEventListener('click', () => {
        input.value = Math.min(parseInt(input.value) + 1, 99);
    });

    buttons_decrement[index].addEventListener('click', () => {
        input.value = Math.max(parseInt(input.value) - 1, 1);
    });

    input.addEventListener('input', () => {
        if (parseInt(input.value) < 1) {
            input.value = 1;
            return;
        }
        if (parseInt(input.value) > 99) {
            input.value = 99;
        }
    });
}

// TODO: test if listener matches cart
