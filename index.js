'use strict'

const obj = {};



function MyObj() {
//    if(!new.target) {
//        return new MyObj()
//    }

//this - контекст

this.prop = 'value';

}

const obj2 = new MyObj();