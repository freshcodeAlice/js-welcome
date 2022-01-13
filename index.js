'use strict';

function test() {
    console.log(this); // undefined
}

const test2 = function () {
    console.log(this); // undefined
}

const test3 = () => {
    console.log(this); //Window
}

test();
test2();
test3();