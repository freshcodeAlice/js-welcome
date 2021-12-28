const inputValue1 = Number(prompt('Type first number'));
const inputValue2 = Number(prompt('Type second number'));

let result;

if (isNaN(inputValue1) && isNaN(inputValue2)) {
    result = 'Wrong';
} else {
    result = inputValue1 + inputValue2;
}


alert(result);
