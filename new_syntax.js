class UserClass {
    constructor(name, lastName, age) {
        this._name = name;
        this._lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this._name} ${this._lastName}`;
    }

    set fullName(strValue) {
        if (typeof strValue !== 'string') {
            throw new TypeError('Fullname must be a string')
        }

        const nameArray = strValue.split(' ');

        if (nameArray.length !== 2) {
            throw new Error('Fullname must contain name and lastname');
        }
        this._name = nameArray[0];
        this._lastName = nameArray[1];
    }

    isAdult() {
        return this.age >= 18;
    }

}

const u3 = new UserClass('Test', 'Testing', 15);

// const u = {
//     _name: 'u',
//     set name(v) {
//         this._name = v
//     },
//     get name() {
//         return this._name
//     }
// }

/* 
Реализовать класс Worker (Работник)
имеющий свойства
name, lastName, rate (ставка за день), days (кол-во отработанных дней)

Метод, который возвращает зарплату работника (ставка * дни)
*/

const MINIMAL_ZP = 6000 / 20;

class Worker {

/**
 * 
 * @param {string} name 
 * @param {string} lastName 
 * @param {number} rate 
 * @param {number} days 
 */

    constructor (name, lastName, rate = MINIMAL_ZP, days = 0) {
        this.name = name;
        this.lastName = lastName;

        if(typeof days !== 'number') {
            throw new TypeError ('Parameters has unappropriate type');
        }

        if(days < 0 || days > 31) {
            throw new RangeError('Not correct days count');
        }

        this.rate = rate;
        this.days = days;
    }

    getSalary () {
        return this.rate * this.days;
    }


    set rate(value) {

        if(typeof value !== 'number') {
            throw new TypeError ('Parameters has unappropriate type');
        }
        
        if (value < 0) {
            throw new RangeError('Not appropriate salary rate');
        }

        this._rate = value; // _rate - это скрытое (приватное) свойство
    }

    get rate() {
        return this._rate
    }



}

const w1 = new Worker ('Ivan', 'Petrenko');


/* 
Задача: посчитать общий вес автомобиля

class Fuel 
    - volume
    - density

    getWeight()
   << volume*density


class Auto 
    - ownWeight
    - model
    - fuel

    getFullWeight()
    << общий вес машины с топливом


    Advanced level:
    - Добавить вес пассажиров и водителя
*/


class Fuel {
    constructor(volume, density) {
        this.volume = volume;
        this.density = density;
    }

    getWeight () {
        return this.volume*this.density;
    }

}


class Auto {

/**
 * 
 * @param {string} model 
 * @param {number} ownWeight 
 * @param {Fuel} fuel 
 */

    constructor (model, ownWeight, fuel) {
        this.model = model;
        this.ownWeight = ownWeight;
        this.fuel = fuel;

    }

    getFullWeight() {
        return this.ownWeight + this.fuel.getWeight()
    }

}

const benzin = new Fuel(50, 0.9);

const vw = new Auto('passat', 1800, benzin);


/* 
Вы и ваш друг. 
- moneyAmount

Задача - посчитать общее количество денег у вас и у вашего друга
*/


class Friend {

/**
 * 
 * @param {string} name
 * @param {number} moneyAmount
 * @param {Friend} friend
 */

    constructor(name, moneyAmount, friend) {
        this.name = name;
        this.moneyAmount = moneyAmount;
        this.friend = friend;
    }

    countMoney() {
        return this.moneyAmount + this.friend.moneyAmount;
    }
}

const myFriend = new Friend('Daria', 100, null);

const me = new Friend('Alisa', 20, myFriend);

/* Advanced level:
У друзей могут быть друзья
Здесть есть два варианта:
либо у друга целый массив друзей,
либо у друга ссылка на другого друга

Tip: Рекурсивный обход
*/