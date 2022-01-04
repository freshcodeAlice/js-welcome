const cat = {
    name: 'Barsik',
    age: 4,
    color: 'ginger',
    weight: 5,
    breed: 'Cheshirkiy',
    isMale: true,
    isSleeping: false
}; 

console.log(cat); // read

cat.age = cat.age + 1; //update

console.log(cat.age);

/* 
C - create
R - read
U - update
D - delete

*/

cat.isSleeping = undefined; // bad practice delete

delete cat.isSleeping; // delete property
