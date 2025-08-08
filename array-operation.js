/**
 * Objective: write a function to give me the sum of all elements of an array
 * step-1: declare a function
 * step-2: check whether the function is called properly or not
 * step-3: pass an array as a parameter(s)
 * step-4: pass the parameter(s), check whether it is passed properly or not
 * step-5: do the function task(step by step)
 */

function sumOfNumbers(numbers){
    // console.log(numbers);
    let sum = 0;
    for (const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
    
}

const nums = [10, 20, 30, 40, 50];
const sum = sumOfNumbers(nums);
console.log('Sum of numbers is: ', sum);