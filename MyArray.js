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

MyArray.isMyArray = function isMyArray(obj) {
    return (obj instanceof MyArray);
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

    this.forEach = function forEach(func) {
        for (let i = 0; i < this.length; i++) {
            func(this[i], i, this)
        }
    }

    this.map = function map(func) {
        const newArray = [];
        for (let i = 0; i < this.length; i++) {
            newArray[i] = func(this[i]);
        }
        return newArray;
    }

    this.some = function some(func) {
        for (let i = 0; i < this.length; i++) {
            const result = func(this[i]);
           if (result) {
            return true;
           }   
        }
        return false;
    }

    this.every = function every(func) {
        for (let i = 0; i < this.length; i++) {
        const result = func(this[i]);        
           if (!result) {
            return false;
           }   
        }
        return true;
    }


    this.filter = function filter(func) {
        const newArray = [];
        for (let i = 0; i < this.length; i++) {
            const result = func(this[i]);
           if (result) {
            newArray.push(this[i]);
           }   
        }
        return newArray;
    }

}

MyArray.prototype = new MyProtoArray(); //связь с прототипом
