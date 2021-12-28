/* 
1. Функция, которая вернет максимальное значение из двух предложенных
2. Функция, которая вернет минимальное значение из двух предложенных
3. Функция, которая определяет четное или нечетное число

*/


// Task 1

function getMax(num1, num2) {
    if(num1 > num2) {
       return num1;
    } else {
        return num2;
    }
}

const bigger = getMax(5, 10);
alert(bigger);

// Task 1

function getMin(num1, num2) {
    if(num1 < num2) {
       return num1;
    } else {
        return num2;
    }
}

const smaller = getMin(1, 2);
alert(smaller);

function isEven (num) {
   return (num % 2 === 0)
}

console.log(isEven(4))