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

console.log(engArray);

const ruArray = [...vocabulary.values()];

console.log(ruArray);

/*-----*/