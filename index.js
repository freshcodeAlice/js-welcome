class Squirrel {
    constructor (name, color) {
        this.name = name;
        this.color = color;
    }

    eat() {
        return `${this.name} is eating`;
    }

    jump() {
        return `${this.name} is jumping`;
    }
}

/* Белка-Летяга,
умеет все то же самое + умеет летать
+ свойство maxDistance

*/
class FlyingSquirrel extends Squirrel {
    constructor (name, color, maxDistance) {
        super(name, color);
        this.distance = maxDistance;
    }

    flying(distanceValue){
        if(distanceValue > this.distance) {
            return 'Я не могу так далеко улететь';
        }
        return 'Я улетела';
    }
}

const flSq = new FlyingSquirrel('Flying Squirrel', 'red', 20);

/* FairySquirrel
умеет всё то, что и обычная + летать + петь песни и танцевать
Репертуар песен - массив
Метод sing() должен выводить все песни репертуара построчно
Метод dance() должен вернуть простую строку "Имя_рек танцует"
*/

class FairySquirrel extends FlyingSquirrel {
    constructor(name, color, maxDistance, songs) {
        super(name, color, maxDistance);
        this.songs = songs;
    }

    dance() {
        return `${this.name} is dancing`;
    }


    sing() {
        return this.songs.join(', ');
    }
}

const ourSongs = ['Жуки - Батарейка', 'Плач Єремії - Вона', 'Rammstein - Sonne'];

const fairySquirrell = new FairySquirrel('SuperBelka', 'blue', 200, ourSongs);