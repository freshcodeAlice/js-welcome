'use strict'


const t1 = 1;
const t2 = 1;

const obj1 = {
   test: 1,
};

const obj2 = {
  test: 2
};

const link = obj1; // link === obj1 ссылка на ту же область памяти

link = {} //выдаст ошибку, потому что link - const. Константы запоминают ссылки на объекты!
