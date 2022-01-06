'use strict'

function MyArray() {
    this.length = 0;

    for(let i = 0; i < arguments.length; i++) {

        if(isNaN(arguments[i])) {
         return
        }

        this.push(+arguments[i]);
    }


}

function MyProtoArray() {

    this.push = function() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length++] = arguments[i];
        }
        return this.length
    }

    this.pop = function() {
        if(this.length === 0) {
            return
        }

        const delItem = this[this.length - 1];
        delete this[--this.length];
        return delItem;
    }
}

MyArray.prototype = new MyProtoArray(); //связь с прототипом


const myArr = new MyArray();

