'use strict';

/* 

Дано число N, вывести все его цифры в обратном порядке, разделяя строками (или пробелами)



5 = 5

25 = 5 2

543 = 3 4 5

*/

function getReverseNumber(number) {
    if (number % 100 < 10) {
        return number;
    }
    return `${number % 10} ${getReverseNumber(Math.floor(number / 10))}`
}

console.log(getReverseNumber(123456));