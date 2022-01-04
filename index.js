
/* Написать функцию, которая возводит число в заданную степень */

function getPower(base, power) {
    if(power === 0) {
        return 1
    }

    if(power === 1) {
        return base
    }

    let result = 1;

    for (let i = 1; i <= power; i++){
        result *= base;
    }
    return result;

}








