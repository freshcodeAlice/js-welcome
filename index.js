const GOOD_PASSWORD = 'qwerty123';
/* Задача: спрашивать у пользователя пароль (с помощью промпта), пока он не введет правильный
*/

let count = 0;
const MAX_TRY = 5;

// каждый круг цикла называется итерация

//  while(count++ < MAX_TRY) {
// const userInput = prompt('Type the password');
//    if (userInput === GOOD_PASSWORD) {
//     break;
//    }
//  }


 do {
 console.log('Do' + count)
 } while (count++ < 5)



 console.log('end of script');