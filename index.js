'use strict';
/* 
Создать массив и заполнить его 10тью случайными числами
*/

function getRandomArray(dimension) {
const arr = [];

for (let i = 0; i < dimension; i++) {
     arr.push(Math.round(Math.random()*10));
}

return arr;
}