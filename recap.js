function add (num1, num2) {
    const total = num1 + num2;
    return total;
}

const result = add(10, 65);
// console.log(result);

function add2 (num1, num2) {
    return num1 + num2;
}

const result2 = add2(10, 77);
// console.log(result2);

console.log(result, result2);

function doMath (num1, num2){
    const sum = num1 + num2;
    const sub = num1 - num2;
    const mul = sum * sub;
    const result = mul / 2;
    return result;
}

const result3 = doMath(30, 24);
console.log(result3);
