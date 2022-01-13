'use strict';

function sumAll() {
    let res = null;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
       res += arguments[i];
    }
    return res;
}


const sumAllArrow = (...restArr) => {
const sumOfIt = restArr.reduce((sum, currentValue) => sum + currentValue);
 sumOfIt;
}