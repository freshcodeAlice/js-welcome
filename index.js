const cat1 = {
    name: 'Barsik',
    age: 4,
    color: 'ginger',
    weight: 5,
    breed: 'Cheshirkiy',
    isMale: true,
    run: function() {
        return 'I AM RUNNING'
    },
    sleep: function() {
        return 'Zzzzz...'
    },
    meow: function() {
        return 'MEOW!!!'
    }
}; 


function Cat(name, age, color, weight, breed, isMale) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.weight = weight;
    this.breed = breed;
    this.isMale = isMale;
    this.run = function(){
        return 'I am running!';
    }
    this.meow = function() {
        return 'MEOEWOEW!';
    }
}

const firstCat = new Cat('Murzik', 4, 'white', 3, 'Persian', true);


const secondCat = new Cat('Busia', 7, 'black', 4, 'Siam', false);

