'use strict';
/*
5! = 1*2*3*4*5;
5! = 4!*5;
5! = 3!*4*5;
*/

function getFactorial(n) {
    if( n === 1) {
        return 1;
    }

    return getFactorial(n-1)*n;
}

getFactorial(5);