const GOOD_PASSWORD = 'qwerty123';
/* Задача: спрашивать у пользователя пароль (с помощью промпта), пока он не введет правильный
*/


const MAX_TRY = 5;

// каждый круг цикла называется итерация

//  while(count++ < MAX_TRY) {
// const userInput = prompt('Type the password');
//    if (userInput === GOOD_PASSWORD) {
//     break;
//    }
//  }

//  for (Инициализация;Условие;Изменение на каждом шаге итерации) {
// блок кода
//  }


/* Написать функцию, которая возвращает факториал числа */

function factorial(a) {

    let result = 1;

    for(let i = 1; i <= a; i++){
    result *= i;
    }

     return result
}

 const res = factorial(4);
 console.log(res);




 console.log('end of script');