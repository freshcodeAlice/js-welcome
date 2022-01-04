
/* Написать функцию, которая возвращает факториал числа */

function factorial(number) {
const MAX_TRY_FACTORIAL = 250;

    if (isNaN(number)) {
        return false;
    }

    if(number === 1 || number === 0) {
        return 1;
    }

    if(number > MAX_TRY_FACTORIAL){
        return false;
    }

    let result = 1n;

    for(let i = 1; i <= number; i++){
    result *= BigInt(i);
    }

     return result
}



 // 1*2*3*4*5...*n









