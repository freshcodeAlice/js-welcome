/* 
Три кита ООП:

1. Инкапсуляция +
2. Наследование +
3. Полиморфизм +

*/

class Figure {
    constructor(name) {
        this.name = name;
    }

    getArea() {

    }
}

class Triangle extends Figure {
    constructor(name, a, b, angle) {
        super(name);
        this._a = a;
        this._b = b;
        this._angle = angle;
    }

    getArea() { //override - переопределенный метод
        return this._a * this._b * Math.sin(this._angle * 180 / Math.PI);
    }
}

class Square extends Figure{
    constructor(name, a) {
        super(name);
        this.a = a;
    }

    getArea() { //override - переопределенный метод
        return this.a * this.a;
    }
}

const t = new Triangle('triangle', 7, 3, 120);

const s = new Square('square', 4);

/**
 * 
 * @param {Figure} figure 
 */
function getFigureArea(figure) {

    if( figure instanceof Figure) {
        return figure.getArea()
    }
    throw new TypeError('It`s not a figure');
}

/*
console.log(t instanceof Triangle); //true
console.log(t instanceof Figure); //true
console.log(t instanceof Object); //true

*/

/* Написать класс Circle
унаследуйте его от Figure, добавьте метод рассчета площади по радиусу

*/
