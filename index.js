'use strict';

/**
 * 
 * @param {number} num 
 * @param {number} exp 
 * @returns {number}
 * @throws {TypeError} - в случае несовпадения типа данных
 */

const pow = (num, exp) => {

    if(typeof num !== 'number' || typeof exp !== 'number') {
        throw new TypeError('Тип не тот');
    }


    if (exp === 1) {
        return num;
    }

    return pow(num, exp-1)*num;
}

