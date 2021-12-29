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


const number = +prompt('Type your number');

debugger;

if(isNaN(number)) {
    console.log('Некорректное число');
} else if (number % 5 === 0) {
    console.log('Делится на 5');
} else if (number % 3 === 0) {
    console.log('Делится на 3');
} else if (number % 2 === 0) {
    console.log('Делится на 2');
} else {
    console.log('Не делится ни на 5, ни на 3, ни на 2');
}



console.log('end of script');