// alert - модалка с сообщением
// prompt - модалка с инпутом, куда можно ввести сообщение
// confirm - модалка с подтверждением или отменой
let number;
let result;
let action;

number = prompt('Type the number');

action = prompt('Choose your action');

if (action === '+') {
result = Number(number) + 2;
} else {
result = Number(number) - 2;    
}

alert(result);

// console.log(result);


