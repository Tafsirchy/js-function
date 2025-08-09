/**
 * create a function that will return only the even numbers from an array
 * return the sum of even numbers
 */

function evenNumbersOnly(numbers){
    // console.log(numbers);
    const evens = [];
    for(const number of numbers){
        // console.log(number);
        if (number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [5, 8, 91, 24, 6];
// const evens = evenNumbersOnly(numbers);
// console.log('Even numbers are:',evens);

function sumOfEvensNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfEvensNumbers(numbers);
console.log('Sum of even numbers:', sum);
