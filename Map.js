'use strict'

const vocabulary = new Map();

vocabulary.set('cat', 'кошка');
vocabulary.set('dog', 'собака');
vocabulary.set('cucumber', 'огурец');
vocabulary.set('tomato', 'помидор');
vocabulary.set('orange', 'апельсин');
vocabulary.set('pineapple', 'ананас');
vocabulary.set('car', 'автомобиль');
vocabulary.set('fruit', 'фрукт');
vocabulary.set('vocabulary', 'словарь');
vocabulary.set('can', 'банка');
vocabulary.set('ball', 'мяч');


const userInput = 'Cat dOg Tomato abracadabra cucUmber cAn balL';

function translate(str) {
   return str.toLowerCase()
   .split(' ')
   .map((word)=> vocabulary.has(word) ? vocabulary.get(word) : word)
   .join(' ');
}


/*   Task: 
Связать пользователя и его сообщения таким образом, чтобы мы могли получить его сообщения по объекту пользователя     */

const user1 = {
    name: 'John',
    age: 20,
    id: 1,
}

const user2 = {
    name: 'Jane',
    age: 21,
    id: 2,
}


const johnMsg = ['ewwre', 'rewreewre', 'rewrerew'];
const janeMsg = ['tertwe', 'hgjghjghj', 'afdasdfsd'];

const userMessageMap = new Map();
userMessageMap.set(user1, johnMsg);
userMessageMap.set(user2, janeMsg);

/*-------*/

const engArray = [...vocabulary.keys()];
const ruArray = [...vocabulary.values()];

/*-----*/


/* Task:
Напишите функцию, которая проверяет, может ли строка быть воссоздана с использованием символов другой строки.
Первый параметр функции - создаваемая строка.
Второй параметр - используемая строка.
Функция возвращает Boolean.
Use Map.

Тест-кейсы:
compare('test', 'setT') // true
compare('love', 'evol') // true
compare('test', 'lore') //false
compare('Mom', 'omo') //false

Алгоритм решения:
1. Сравнить длину. Если не одинаковая - false
2. Создать "словарь"-Map. Буква будет ключом, значением - кол-во вхождений.
3. Создать такой же словарь для второй строки.
4. Сравнить два словаря (их содержание).

*/

function getMap(str) {
    const letterMap = new Map();
    for(const letter of str) {
        if(letterMap.has(letter)) {
            const letterCount = letterMap.get(letter);
            letterMap.set(letter, letterCount+1);
        } else {
            letterMap.set(letter, 1);
        }
    }
    return letterMap;
}


function compare(str1, str2) {

    if(str1.length !== str2.length) {
        return false;
    }

    const mapToStr1 = getMap(str1);
    const mapToStr2 = getMap(str2);

    if(mapToStr1.size !== mapToStr2.size) {
        return false
    }

    for (const key of mapToStr1.keys()){
        if(mapToStr1.get(key) !== mapToStr2.get(key)){
            return false
        }
    }
    return true

}

//console.log(compare('test', 'sett'));


/* ----- */

/* Массив со вложенными подмассивами-кортежами */

[...vocabulary.entries()]

/* -----*/

const cortArr = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]

const newMap = new Map(cortArr);