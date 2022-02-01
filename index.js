const options = {
    braces: {
    '(': ')',
    '{': '}',
    '[':']',
    },
    isStrict: false
}

/*
1. Определяем открывающую скобку. Если да - пушим ее в стэк
2. Если стэк пуст - возвращаем фолс
3. Если стэк не пуст и встреченный элемент - закрывающая скобка, то забираем последний элемент из стэка
*/



function checkSequence (str, {braces, isStrict}) {
const stack = new Stack();
const closeBraces = Object.values(braces);

for(const symbol of str) {
    if (braces[symbol]){
        stack.push(symbol);
        continue;
    }

    if(stack.isEmpty){
        return false;
    }

    if (symbol === braces[stack.pick()]) {
        stack.pop();
    } else if (braces[symbol] || closeBraces.includes(symbol)){
        return false;
    }

}

return stack.isEmpty;

}

checkSequence('(})', options)

