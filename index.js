'use strict';
/* 
Функция, которая решает квадратные уравнения
*/

function getRootOfSquare (a, b, c) {

    let D = b * b - 4 * a * c;

    const result = [];

    if ( D < 0) {
        return false;
    } else if ( D === 0) {
        result[0] = (b / 2 * a * (-1));
        result[1] = result[0];
    } else {
        result[0] = (-b + Math.sqrt(D)) / 2*a;
        result[1] = (-b - Math.sqrt(D)) / 2*a; 
    }
    return result;
}