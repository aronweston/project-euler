//Problem 1: FizzBuzz = Find all the multiples of 3 and 5 below 1000 and add them together. 
//loop through 1000
// if multiple of 3 or 5 
//Hint: save it to an array
//find the values that are divisble of both 

let sum = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log('Sum: %d', sum);


//Problem 2: Fibonacci sequence
//Generate the FS by starting with an array with 0 and 1. 
const fibSeq = (n) => {

    const arr = [0, 1];
    let sum = 0;

    //push the sequence 
    for (let i = 2; i < n; i++) {
        //Push the values to the array
        arr.push(arr[i - 1] + arr[i - 2])
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 4000000 && arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    console.log(sum);
    console.log(arr);

}

fibSeq(100)

//or if functions are your fancy

const fibSeq = (n) => {
    const arr = [0, 1];
    //push the sequence 
    for (let i = 2; i < n; i++) {
        //Push the values to the array
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr;
}

const runThrough = (arr) => {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 4000000 && arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
}

fibSeq(100)