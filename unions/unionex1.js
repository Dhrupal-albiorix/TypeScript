//STANDARD TYPESCRIPT TYPES
// console.log(typeof (myFruits)) 'myFruits' only refers to a type, but is being used as a value here.
//--------------------------------------------------------------------------------------------------// 
var age;
age = null;
age = 30;
//age = "30"; //error //union types allow any one of number or null...so string will give error
console.log(age);
var status_;
status_ = "jh";
console.log(status_);
status_ = true;
console.log(status_);
status_ = null;
console.log(status_);
var fruit;
fruit = "apple";
// fruit = "Apple";
// fruit = "pear";
console.log(fruit);
//CORRECT
// let loadingAction: Actions = {
//     type: "loaded",
//     data: {
//         name : "g"
//     }
// };
// console.log(loadingAction);
//----------------------------------------------
//ERROR
// let loadingAction: Actions = {
//     type: "loaded"
// };
// console.log(loadingAction);
//----------------------------------------------
//CORRECT
var loadingAction = {
    type: "loading"
};
console.log(loadingAction);
//--------------------------------------------------------------------------------
function add(a, b) {
    return a + (b || 0);
}
console.log(2);
console.log(22, 44);
//---------------------------------Union Type Errors--------------------------------
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
    //console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
    //   Property 'toUpperCase' does not exist on type 'number'
}
printStatusCode(45);
