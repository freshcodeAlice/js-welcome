/*
    Деструктуризация - это особый способ создания переменных.
*/

// Деструктуризация объектов

const monitor = {
    sizes: {
        height:{
            value: 20,
            scale: 'sm',
        },
        width: {
            value: 40,
            scale: 'sm',
        }
    },
    brightness: 200,
    contrast: 100,
    color:'black',
    dpi: 300,
    resolution: '4K',
    model: {
        company: 'Samsung',
        type: '9872927628347'
    }
}

// monitor.sizes.width.value

//const monitorWidth = monitor.sizes.width.value;

// Bad practice!
//const monitorBrightness = monitor.brightness;

//Good practice!
//const {brightness} = monitor; 
//const {brightness, contrast, dpi} = monitor;



//Bad practice
// Так плохо, так не надо!
//const {sizes} = monitor;
//const {width} = sizes;
//const {value} = width;

// Good practice!
const {
    sizes: {
        width: {
            value: widthValue
        },
        height: {
            value: heightValue
        }
    }
} = monitor;


// ---- Rest

const {color, dpi, ...restMonitor} = monitor;


/* ---------------- */

// Деструктуризация массивов

const num = [1, 2, 3, 4, 5];

// Bad practice!
//const firstNumber = num[0]

// Good practice!

//const [firstNumber, secondNumber, thirdNumber] = num;

//const [firstNumber, secondNumber, ...restNums] = num;

const [firstNumber,, thirdNumber,, fifth] = num;


/* ---------------- */


// Деструктуризация входных параметров

const user = {
    name: 'TEst',
    lastName: 'Tester'
}

function getFullName({name, lastName}) {

return `${name} ${lastName}`;
}
//








// Homework
// Деструктурировать параметры высоты и ширины экрана
// Вернуть значение диагонали
function getDiagonal(monitor) {

}