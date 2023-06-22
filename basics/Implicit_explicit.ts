// Explicit
let firstName: string = "Dylan";
console.log(firstName);


//impicit .....Implicit - TypeScript will "guess" the type, based on the assigned value:
let firstName2 = "Dylan";
console.log(firstName);

console.log("lokjj");

//  Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json); //returns number but it was assigned as string

//TypeScript will throw an error if data types do not match.
let myName = "sss";
// myName = 22 error
console.log(myName);

let her: string = "good";
// her = 33
console.log(her)

// Setting any to the special type any disables type checking:
let v: any = 2;
console.log(v)
v = "abcd";
console.log(v)

// unknown is a similar, but safer alternative to any.