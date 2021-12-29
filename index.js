/* if (условие) {
    блок кода
} else {
    блок кода, который выполнится в противном случае
}
*/

const globalVar = 'test';

debugger;

if (globalVar) {
    const localVar = 10;
    console.log(localVar);
    console.log(globalVar);
    console.log('ok, it`s true');

 
    
    if(localVar) {
        const innerVar = true;
    }
    // console.log(innerVar);

} else {
    console.log('it`s false');
}

console.log('end of script');


