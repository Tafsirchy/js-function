/**
 * for a given string tell me whether it has even number of character or not
 */

function evenSizedString(str){
    const size = str.length;
    console.log(str);
    console.log(size);
    if(size % 2 === 0){
        console.log('even');
        return true;
    }
    else{
        console.log('odd');
        return false;
    }
}

// evenSizedString('Dhaka');
// evenSizedString('faka');

// console.log(evenSizedString('Dhaka'));
// console.log(evenSizedString('faka'));

function doubleOrTripple(number, doDouble){
    if(doDouble){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTripple(10, true));
// console.log(doubleOrTripple(10, false));


function numberOfElements(array){
    const lengths = array.length;
    return lengths;
}

console.log(numberOfElements([10, 20, 30, 40, 50]));


function getAge(person){
    const age = person.age;
    return age;                             
}