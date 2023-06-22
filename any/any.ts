// no auto assign any to object properties
const student = {
    name: "Harry Potter",
    age: 12
}
// student.name = true //error 
console.log(student)


//assign any to object property
const student2: { name: any, age: 12 | 22 } = {
    name: "dncjj",
    age: 12
}
console.log(student2)
student2.name = true;
console.log(student2)


let coupon: any;
coupon = 26;
console.log(coupon);
coupon = 'DEAL26';
coupon = true;
console.log(coupon);

//auto assign any 
let a;
a = 55;
a = "jfhhj"

function logScores(firstName, ...scores) {
    console.log(firstName, scores);
}
logScores("Ben", 50, 75, 85); // outputs Ben and [50, 75, 85]

//void ----------------------------------------------------------------------------------------------------------------

let whatCanIHold: void;
whatCanIHold = undefined;
//whatCanIHold = null; //errr
// whatCanIHold = "something"; //error
console.log(whatCanIHold);

function logMessage(message: string): void {
    console.log(message);
    //return message //error
}
logMessage("hjdg")

let useless: void = undefined;
//useless = 1; // error


