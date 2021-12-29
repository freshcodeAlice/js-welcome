/* if (условие) {
    блок кода
} else {
    блок кода, который выполнится в противном случае
}
*/




/* if (условие) {
    блок кода
} else {
    блок кода, который выполнится в противном случае
}
*/

/* Тернарный оператор 
условие ? если да : если нет
*/


/* Else - if

if (условие) {

} else if (новое условие) {

} else if (новое условие) {
    
} else {

}


*/



/* Конструкция switch-case
switch (значение) {
    case вариант:
        что делать, если вариант подходит
    case вариант2:
        что делать, если вариант подходит
    ...
    default:
        что делать, если ни один вариант не подошел
}

break - остановка

*/


/* Task 1
Написать калькулятор.
Пользователь вводит два числа, третьим промптом выбирает операцию (+, -, * /). Результат вывести в консоль.
Реализовать через switch-case
*/

const number1 = +prompt('Введите первое число');
const number2 = +prompt('Введите второе число');
const mode = prompt('Выберите действие: \n + - Сложение \n - - Вычитание \n * - Умножение \n / - деление');

//debugger;

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


let f;

switch (mode) {
    case '+':
        f = sum;
        break;
    case '-':
        f = sub;
        break;
    case '*':
        f = mult;
        break;
    case '/':
        f = div;
        break;
                     
}

if (typeof f === 'function') {
    const result = f(number1, number2);
    console.log(result);
} else {
    console.log('Ooops! Something goes wrong');
    return null;
}

/* Task 2 
В переменной day лежит число от 1 до 31.
Определить в какой декаде месяца находится этот день 
(первая, вторая или третья)
Условие! - switch-case
*/

const getDecade = function (day) {
    switch(day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return 1;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            return 2;
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
            return 3;
        default:
            return null;
    }
}