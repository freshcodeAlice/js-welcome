/* Задача "Палиндром"
Проверить, что входная строка читается слева-направо и справа-налево одинаково

Используйте методы строк и массивов
*/


function isPalindrom(testString) {
    return testString.toLowerCase() === testString.toLowerCase().split('').reverse().join('');
}

/* 
Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.

Гласными являются «a», «e», «i», «o», «u»
*/

function getVowels(testString) {
    return testString
    .toLowerCase()
    .split('')
    .filter((letter) =>  ['a', 'e', 'i', 'o', 'u']
    .includes(letter)
    ).length;
}