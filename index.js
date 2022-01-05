/* Реализуйте функцию-конструктор Worker (Работник), который будет иметь следующие свойства: 
name, 
surname, 
age (возраст), 
rate (ставка за день работы), 
days (количество отработанных дней). 

Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.*/

function Worker(name, surname, age, rate, days) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.rate = rate;
    this.days = days;

    this.getSalary = function() {
        if(isNaN(this.days) || isNaN(this.rate)) {
            return false
        }
        
        if( this.days > 31)
        {
           return null;
        }


        return this.rate * this.days

    }
}