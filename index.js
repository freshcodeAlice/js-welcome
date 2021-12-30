// const number1 = +prompt('Введите первое число');
// const number2 = +prompt('Введите второе число');
// const mode = prompt('Выберите действие: \n + - Сложение \n - - Вычитание \n * - Умножение \n / - деление');

// const res = calculate(number1, number2, mode);
// console.log(res);

// //debugger;

// function sum (a, b) {
//     return a + b;
// }

// function sub (a, b){
//     return a - b;
// }

// function mult (a, b) {
//     return a * b;
// }

// function div (a, b){
//     return a / b;
// }

// function calculate(num1, num2, userMode) {
//     let f;
//     switch (userMode) {
//         case '+':
//             f = sum;
//             break;
//         case '-':
//             f = sub;
//             break;
//         case '*':
//             f = mult;
//             break;
//         case '/':
//             f = div;
//             break;               
//     }

//     if (typeof f === 'function') {
//         const result = f(num1, num2);
//         return result;
//     } else {
//         console.log('Ooops! Something goes wrong');
//         return null;
//     }
// }




/* Написать функцию-приветствие, которая выведет "Привет, (имя)!" по переданному имени,
если имя не передали, выведет "Привет, Аноним!"

Из основного кода запросить у пользователя имя, затем передать его в функцию-приветствие.

Условие: функцию сделать с тернарным оператором
*/

function greeting(name) {
const checkedName = name ? name : 'Аноним';
console.log('Привет, ' + checkedName);
}

const userName = prompt('What`s your name?');
greeting(userName);

