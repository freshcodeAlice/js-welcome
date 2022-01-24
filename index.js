const arr = [2, 5, 8, 2, 4, 2, 4, 7, 8, 4, 1];

const linearSearch = (arr, whatToFind) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === whatToFind) {
            return i;
        }
    }
    return -1;

}

const multipyTable = (dimension) => {
    const table = [];
    for (let i = 1; i <= dimension; i++) {
        for (let j = 1; j <= dimension; j++) {
            const number = i*j;
            table.push(`${i} * ${j} = ${number}`);            
        }
    }

    return table;
}


const binarySearch = (array, whatToFind) => {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end)/2);

    while(true) {
        if (array[middle] === whatToFind) {
            return middle;
        }
        if (array[middle] > whatToFind) {
            end = middle;
            middle = Math.floor((start+end) / 2);
        } else {
            start = middle;
            middle = Math.floor((start+end) / 2);
        }
    }


}

const arr2 = [1, 3, 5, 7, 9, 11, 13, 15];

const recursiveBinSearch = (array, whatToFind) => {
    const middle = Math.ceil(array.length / 2);

    if(array[middle] === whatToFind) {
        return middle;
    }

    if(array[middle] > whatToFind) {
       return recursiveBinSearch(array.slice(0, middle), whatToFind);
    } else if (array[middle] < whatToFind) {
       return  middle + recursiveBinSearch(array.slice(middle, array.length), whatToFind);        
    } else {
        return -1;
    }
}


const guessMyNum = () => {
    let start = 0;
    let end = 100;
    let middle = Math.floor((start + end)/2);

    while(true) {
        if (confirm(`${middle} - это твое число?`)) {
            return middle;
        }
        if (confirm(`${middle} больше, чем твое число?`)) {
            end = middle;
            middle = Math.ceil((start+end) / 2);
        } else {
            start = middle;
            middle = Math.floor((start+end) / 2);
        }
    }


}