'use strict';

/* 
Найти максимальное число в массиве, который содержит числа или другие массивы чисел.

const arr = [2, 3, [5, 6], 7, [8, [1, 2]], 8]
*/

/**
 * 
 * @description Рекурсивная функция нахождения максимума из массива с вложенными массивами
 * @param {Array} array Массив
 * @returns {number}
 */


function getMax(array) {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        if (Array.isArray(item)) {
            item = getMax(item);
        }

        if (item > max) {
            max = item;
        }
    }
    return max;
}


const arr = [2, 3, [5, 6], 7, [8, [1, 2]], 8];

