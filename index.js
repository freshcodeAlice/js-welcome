'use strict';
const arr = [2, 7, 3];


for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i-1];
}

arr[0] = 0;

console.log(arr);