// debugger;

// function pow(a) {
//     return a*a
// };
// let b = 0;

// b = pow;

// console.log(b(2));


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


const userInput = prompt('Выберите позицию меню \n 1 - Чай \n 2 - Кофе \n 3 - Сок \n 4 - Лимонад \n 5 - Вода');

debugger;

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

switch (userInput) {
    case '1':
        console.log('Вот ваш чай');
        break;
    case '2':
        console.log('Вот ваш кофе');
        break;
    case '3':
        console.log('Вот ваш сок');
        break;
    case '4':
        console.log('Вот ваш лимонад');
        break;
    case '5':
        console.log('Вот ваша вода'); 
        break;
    default:
        console.log('Такой позиции меню у нас нет');                         
}

