/* Реализуйте класс Студент, который наследуется от класса Юзер.

Этот класс должен иметь следующие свойства:
name (имя, наследуется от User),
lastName (фамилия, наследуется от User),
year (год поступления)

Методы:
getFullName() - наследуется от User
getCourse() - выводит текущий курс студента (от 1 до 5). Курс вычисляется (от текущего года отнять год поступления). Текущий год получить самостоятельно.

*/




class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}

class Student extends User {
    constructor(name, lastName, year) {
        super(name, lastName);
        this.year = year;
    }

    getCourse() {
        const res = new Date().getFullYear() - this.year;

        return res > 5 ? `${this.name} has graduated` : res;
    }

}

const stud = new Student('Test', 'Tester', 2010);