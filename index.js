'use strict';

/* 
Function Declaration - можно вызвать с любой точки кода
Function Expression - можно вызвать только после ее объявления
*/

//const number1 = +prompt('Введите первое число');
//const number2 = +prompt('Введите второе число');
//const mode = prompt('Выберите действие: \n + - Сложение \n - - Вычитание \n * - Умножение \n / - деление');

//const res = calculate(number1, number2, mode);
//console.log(res);

function square(x) {
const result = mult(x, x);
return result;
}




function sum (a, b) {
    return a + b;
}

function sub (a, b){
    return a - b;
}

function mult (a, b) {
    return a * b;
}

function div (a, b){
    return a / b;
}

// Callback - функция, переданная как аргумент другой функции
// Функция высшего порядка - функция, принимающая на вход другие функции или возвращающая функции в результате исполнения

function highOrderFunction(num1, num2, functionToPerform){
    return functionToPerform(num1, num2);
}


const res = highOrderFunction(3, 4, sum);
console.log(res);



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
//         return null;
//     }
// }



//  function greeting(name) {
//  const checkedName = name ? name : 'Аноним';
//  console.log('Привет, ' + checkedName);
//  }

 
//  const userName = prompt('What`s your name?');
//  greeting(userName);
