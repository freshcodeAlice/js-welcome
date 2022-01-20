'use strict'

class MyArrayIterator {
    constructor (myArray){
        this.array = myArray;
        this.currentItem = 0;
    }

next() {
    return {
        value: this.array[this.currentItem++],
        done: this.currentItem > this.array.length,
    }
}
}



class MyArray {
    constructor(...args) {
        this.length = 0;
        for(let i = 0; i < args.length; i++) {    
            this.push(args[i]);
        }
    }



   static isMyArray = function isMyArray(obj) {
        return (obj instanceof MyArray);
    }
   
    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length++] = arguments[i];
        }
        return this.length
    }

    pop() {
        if(this.length === 0) {
            return
        }
        const delItem = this[this.length - 1];
        delete this[--this.length];
        return delItem;
    }

   forEach(func) {
        for (let i = 0; i < this.length; i++) {
            func(this[i], i, this)
        }
    }

   map(func) {
        const newArray = [];
        for (let i = 0; i < this.length; i++) {
            newArray[i] = func(this[i]);
        }
        return newArray;
    }

   some(func) {
        for (let i = 0; i < this.length; i++) {
            const result = func(this[i]);
           if (result) {
            return true;
           }   
        }
        return false;
    }

    every(func) {
        for (let i = 0; i < this.length; i++) {
        const result = func(this[i]);        
           if (!result) {
            return false;
           }   
        }
        return true;
    }

    concat(arr) {
        const res = new MyArray();
        for (let i = 0; i < this.length; i++) {
           res.push(this[i]);  
        }
        for (let j = 0; j < arr.length; j++) {
            res.push(arr[j]);  
         }
        return res;
    }


   filter(func) {
        const newArray = [];
        for (let i = 0; i < this.length; i++) {
            const result = func(this[i]);
           if (result) {
            newArray.push(this[i]);
           }   
        }
        return newArray;
    }
    

    flat(depth = 1) {
     let res = new MyArray();

    //     for (let i = 0; i < this.length; i++) {

    //         if(this[i]===undefined) {
    //             continue;
    //         }
    //         if(MyArray.isMyArray(this[i]) && depth){
    //             res = res.concat(this[i].flat(depth - 1));

    //         } else {
    //             res.push(this[i]);
    //         }            
    //     }
    //     
    
        this.forEach((item)=>{
            if(MyArray.isMyArray(item) && depth){
             res = res.concat(item.flat(depth - 1));
            } else if (item !== undefined) {
              res.push(item);
            }
        })
        return res;

}


    [Symbol.iterator]() {
        return new MyArrayIterator(this);
    }
}



const arr = new MyArray(1, 2, 3, 4, 5);

