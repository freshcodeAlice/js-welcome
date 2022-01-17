'use strict';

function User(firstName, lastName, age, email, isMale, isSubscribe = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.isMale = isMale;
    this.isSubscribe = isSubscribe;

    this.getFullName = function () {
        return `${this.firstName} ${lastName}`;
    }
}

function createRandomUser(quantity) {
    const res = [];

    for (let i = 0; i < quantity; i++) {
        const user = new User(
            `Name${i}`,
            `LastName${i}`,
            Math.round(Math.random()*100),
            `mail${i}@test.com`,
            Math.random() > 0.5
        );
        res.push(user);
    }

    return res;
}

const userArr = createRandomUser(50);
//console.table(userArr);


/* Tasks:
1. Получить массив полных имен с помощью .map()
2. Получить массив совершеннолетних пользователей
3. Зарандомить подписку у пользователей
4. Получить массив подписанных совершеннолетних пользователей женского пола, но вывести только их почту
*/

// Task 1
const getFullNames = (userArray) => {
    return userArray.map((currentUserObject) => {
       return currentUserObject.getFullName();
    });
}

//getFullNames(userArr);

//Task 2

const ADULT_AGE = 18;

const getAdultUsers = (userArray) => {
    return userArray.filter( user => user.age > ADULT_AGE);
}

//getAdultUsers(userArr);

// Task 3

const getRandomSubscribe = (userArray) => {
    userArray.forEach(user => {
        user.isSubscribe = Math.random() > 0.5;
    });
}
getRandomSubscribe(userArr);

//console.table(userArr);

//Получить массив подписанных совершеннолетних пользователей женского пола, но вывести только их почту

const getAdultSubscribedFemaleUsers = (userArray) => {
    return userArray.filter(user => user.age > ADULT_AGE && user.isSubscribe && !user.isMale
    ).map(user => user.email);
}

console.table(getAdultSubscribedFemaleUsers(userArr));