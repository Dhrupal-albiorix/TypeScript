//STANDARD TYPESCRIPT TYPES

// console.log(typeof (firstName), "type of const fristName")

type myFruits = "banana" | "apple" | "pineapple";
// console.log(typeof (myFruits)) 'myFruits' only refers to a type, but is being used as a value here.

//--------------------------------------------------------------------------------------------------// 
let age: number | null;
age = null;
age = 30;
//age = "30"; //error //union types allow any one of number or null...so string will give error
console.log(age);


let status_: string | boolean | null
status_ = "jh"
console.log(status_)
status_ = true;
console.log(status_)
status_ = null
console.log(status_)
// status_ = 1 error as number is not included in union type

//--------------------------------------------------------------------------------------------------//
// more specifice coding

//String literal union types 
type fruits = "banana" | "apple" | "pineapple";
let fruit: fruits;
fruit = "apple";
// fruit = "Apple";
// fruit = "pear";
console.log(fruit)


//Object union types
type Actions = { type: "loading" } | { type: "loaded"; data: { name: string } };
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
let loadingAction: Actions = {
    type: "loading"
};
console.log(loadingAction);

//--------------------------------------------------------------------------------


function add(a: number, b?: number): number {
    return a + (b || 0);
}
console.log(2);
console.log(22, 44);

//---------------------------------Union Type Errors--------------------------------
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
    //console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
    //   Property 'toUpperCase' does not exist on type 'number'
}

printStatusCode(45)

