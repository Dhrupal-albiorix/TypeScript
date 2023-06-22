//Create a function to find out the even numbers from a given array.
const arr1 = [22, 11, 33, 12];
function findEven(arr: number[]) {
    return arr.filter(el => (el % 2 == 0))
}
console.log(findEven(arr1));


//Create a function which double your array elements
const arr2 = [22, 11, 33, 12];
function DoubleValue(arr: number[]) {
    return arr.map(el => el * 2)
}
console.log(DoubleValue(arr2));


//Write a JavaScript function to get the first element of an array.
//Passing the parameter 'n' will return the first 'n' elements of the array
const arr3 = [22, 11, 33, 12];
function SliceValue(arr: number[], n: number = 1) {
    return arr.length ? arr3.slice(0, n) : "no array gven";
}
console.log(SliceValue(arr3));
console.log(SliceValue(arr3, 2));


//Write a simple JavaScript program to join all elements of the following array into a string.
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(','))