'use strict';

/*  Старый вариант:
function getCapitalizeString(str) {
    const strArray = str.split(' '); //Сплитим строку, превращаем в массив
    const wordUp = strArray.map((word) => { //Метод map вызывает указанный коллбэк для каждого перебираемого элемента массива. Коллбек получает от мэпа currentValue, слово (поштучно каждое).
        const firstLetter = word[0].toUpperCase(); //Берем у слова первый символ и делаем его большой буквой
        const resultWord = firstLetter+word.substring(1); //Склеиваем полученную большую букву с подстрокой, начинающейся с первого символа (то есть обрезок слова)
        return resultWord; //возвращаем готовое слово
    });
const resultString = wordUp.join(' '); // объединяем массив с готовыми словами в строку, используя в качестве разделения слов - пробел.
return resultString;
}

*/

// Новый вариант
function getCapitalizeString(str) {
    return str.split(' ')
    .map(word => word[0].toUpperCase()+word.substring(1))
    .join(' ');
}

