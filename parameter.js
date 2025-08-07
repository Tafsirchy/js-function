function vaatKhao(){
    console.log('hand wash kore aso');
    console.log('boso');
    console.log('plate a khabar dabar nao');
    console.log('gopat gopat kore khao');
}
// vaatKhao();




function square(num){
    // console.log(num);
    console.log('Value of the parameter: ',num);
    var result = num * num;
    console.log('Result is: ',result);
    // return result;

}

square(4);
console.log('--------------');
square(5);
console.log('--------------');
square(666);
// square(43);
// console.log(square(55));


function add(num1, num2){
    console.log('Value of num1 and num2: ',num1, num2);
    const sum = num1 + num2;
    console.log('Sum of numbers: ',sum);
    // return sum;
}

add(45, 55);
console.log('--------------');
add(65, 25);
console.log('--------------');
add(99, 76);
console.log('--------------');
add(33, 77);
// console.log(add(55, 45));


function addAll(a, b, c, d, e){
    console.log('Value of a, b, c, d, e: ',a, b, c, d, e);
    const total = a + b + c + d + e;
    console.log('Sum of numbers: ',total);
}


addAll(45, 55, 65, 75, 85);