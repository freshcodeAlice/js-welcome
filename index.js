'use strict'

function getMultyplyTable() {
    const table = {};

    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            table[`${i} * ${j}`] = i * j;
        }
    }


    return table;
}


//getMultyplyTable();

/* Напишите функцию, которая принимает число и выводит все его делители от 1 до 10*/

function getDividers(number) {
const dividerTable = {};

    for (let i = 1; i < 10; i++) {
        if (number % i === 0) {
           dividerTable[i] = number / i;
        }
    }
    return dividerTable;
}

//getDividers(12);