'use strict';

/* Напишите конструктор для объекта "Лестница".
У нее должно быть:
value - значение ступеньки, на которой вы находитесь

И три метода:
up() - подняться на ступеньку вверх
down() - спустить на ступеньку вниз
showStep() - посмотреть текущую ступеньку
*/

/* Task2:
Измените код таким образом, чтобы мы могли делать цепочку вызовов:
ladder.up().up().down().up().showStep();
*/


function Ladder () {
    this.value = 0;
    this.up = function() {
        this.value++;
        return this;
    };
    this.down = function() {
        this.value--;
        return this;
    };
    this.showStep = function() {
        return this.value;
    };
}

const ladder = new Ladder();