//Problem

// function sumTwoSmallestNumbers(numbers) {
//   //Code here
// }


//Attempt 1
const array = [24, 564, 12, 43, 42, 344]
let min = Math.min(...array);

console.log(min); //test to find smalled integer and show in terminal

let twoMins = array.sort((a,b) => a-b).slice(0,2); //sorts the original array into order then slices the first two values into a new array

console.log(twoMins); //test to show the new array of the sliced integers

let sum = twoMins.reduce((a,b) => a + b, 0) // adds the new array together and gives a new array with postion 0 being the sum

console.log(sum) //test to show the new array added together in the terminal


//Attempt 2
function sumTwoSmallestNumbers(array) {
    array.sort((a,b) => a - b);
    return array[0] + array[1];
} 

console.log(sumTwoSmallestNumbers(array))