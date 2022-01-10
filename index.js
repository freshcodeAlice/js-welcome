'use strict';

/* 

Дан массив arr, состоящий из чисел. Найдите среднее арифметическое всех его элементов

*/

function getAverage() {

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return (sum / arguments.length);

}

const array = [2, 3, 4, 5, 6, 7];
console.log(getAverage(2, 3, 4, 5, 6, 7));