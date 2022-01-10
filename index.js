'use strict';

const driver1 = {
    name: 'First',
};

const driver2 = {
    name: 'Second',
}

const car = {
    go: function() {
        return `${this.name} is on the car`;
    }
}

driver1.__proto__ = car;
driver2.__proto__ = car;