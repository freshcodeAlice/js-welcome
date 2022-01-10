'use strict';
/* Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа. (вернуть true, если есть, false, если нет)

*/

function hasEqual (array) {

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
       for(let j = i+1; j < array.length; j++) {
        if (current === array[j]) {
            return true
        }
       }
        
    }

    return false
}

const arr = [2, 3, 4, 4, 5, 6];
