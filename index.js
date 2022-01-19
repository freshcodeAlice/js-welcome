class User {
    constructor(name, surname, age, isBanned = false) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isBanned = isBanned;
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Moderator extends User{
    constructor(name, surname, age, isBanned, access) {
        super(name, surname, age, isBanned);
        this.access = access;
    }

    createMessage(msgBody) {
    }
    deleteMessage(id) {
    }
}

const u = new User('Staruha', 'Shapoklyak', 50);

const moder = new Moderator('Krokodil', 'Gena', 35);

/* Создайте роль Админа, который умеет все то же, что и User, плюс возможность забанить и разбанить пользователя

bun(user)
unbun(user)
*/

class Admin extends User {
    constructor (name, surname, age, email){
        super(name, surname, age, false);
        this.email = email;
    }

    toggleBan(user) {
        if (user instanceof User) {
            user.isBanned = !user.isBanned;
        } else {
        throw new TypeError('Its not a user');
        }
    }
}

class Owner extends Admin{

}

class Founder extends Owner {
    
}