console.log('object in TS');
const car: { name: string, std: number, pass: boolean } = {
    name: "abc",
    std: 2,
    pass: true
}
console.log(car);
car.name = "abc__";
console.log(car);
//car.name = true //error
const firstName = "Bob";

//----------------------------------------------------------------------//

// const myobj: { name: string, rollNo: number } = {
//     name: "stu1",
//     as rollNo is not given value ...this object will crate error
// }

//but we can use optional property to resolve this error

const myobj2: { name: string, rollNo?: number } = {
    name: "dhrupal"
}

//--------------------------------------------------------------------------------//
// Index Signatures 
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error

const arr = [1,2]

//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

console.log(nameAgeMap);