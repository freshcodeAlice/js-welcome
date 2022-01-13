'use strict';

const sumAllArrow = (...restArr) => { //rest
console.log(restArr);
const sumOfIt = restArr.reduce((sum, currentValue) => sum + currentValue);
 sumOfIt;
}

const arrNumbers = [2, 4, 2, 5, 6, 8];
const arrNumbers2 = [3, 6, 2, 4, 7, 32];

const concatArray = [...arrNumbers, ...arrNumbers2]; //concatination



sumAllArrow(...arrNumbers); // spread

 
const arr = [3, 2, 5, 3, 5, 2, 4, 66];

const newArray = [...arr]; // пересборка массива

console.log(newArray);

/*
Найдите максимальное и минимальное число, используя методы Math.max(), Math.min()
*/

const max = Math.max(...arr);
const min = Math.min(...arr);
console.log(max, min);

