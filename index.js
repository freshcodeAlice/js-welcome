
// function washMachine(mode, temperature, rpm, soap, clothes) {
//     // do something
//     //return clean clothes
// }

// const boxForCleanClothes = washMachine('delicate', 35, 800, 'ariel', 'shirts');



/* Function Declaration:
function имя_функции(параметры функции) {
    тело функции
}

Function Expression:
const имя_фунции = function (параметры) {
    тело функции
}

Arrow Function:
const имя_функции = (параметры) => {тело}


Вызов:
имя_функции(аргументы);

*/


const inputValue1 = Number(prompt('Type first number'));
const inputValue2 = Number(prompt('Type second number'));

const getSumOfTwo = function(value1, value2){
    let result;
    if (isNaN(value1) && isNaN(value2)) {
        result = 'Wrong';
    } else {
        result = value1 + value2;
    }

    debugger;
// Scope - область видимости

  return result;
}


const result = getSumOfTwo(inputValue1, inputValue2);
alert(result);

const aaa = 55;
const bbb = 44;


const secondResult = getSumOfTwo(55, 44);