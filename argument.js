function doubleIt (num) {
    const double = num * 2;
    console.log('Double of ',num,'is:',double);
}

console.log('I will call the function');
doubleIt(15);
console.log('-------------------');
doubleIt(88);
console.log('-------------------');
doubleIt(873);
console.log('-------------------');
const num = 55;
doubleIt(num);
const money = 112;
doubleIt(money);

function difference(num1, num2){
    if(num1 > num2){
        const diff = num1 - num2;
        console.log('Difference is:',diff);
    }
    else{
        const diff = num2 - num1;
        console.log('Difference is:',diff);
    }
    
}

const fatherAge = 45;
const myAge = 25;
difference(fatherAge, myAge);