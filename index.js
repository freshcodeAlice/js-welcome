'use strict';

class Animal {
    constructor(name, amountOfLegs, type) {
        this.name = name;
        this.amountOfLegs = amountOfLegs;
        this.type = type;
    }

    set name(v) {
        if(typeof v !== 'string') {
            throw new TypeError();
        }
        this._name = v;
    }

    get name() {
        return this._name;
    }

    run() {
        return `${this.name} is runing`;
    }

    eat() {
        return `${this.name} is eating`;
    }

    static isAnimal(obj) {
        return obj instanceof Animal;
    }

}



const lion = new Animal('Simba', 4, 'Lion');
const turtle = new Animal('Totilla', 4, 'Turtle');
