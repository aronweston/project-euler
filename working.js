//What is prime number
//Prime = Only divisible by itself and 1
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107



let arr = []

for (i = 0; i <= 10; i++) {
    if (i % i === 0 && i % 1 === 0) {
        arr.push(i)
    }
}
console.log(arr);