console.log('object in TS');
var car = {
    name: "abc",
    std: 2,
    pass: true
};
console.log(car);
car.name = "abc__";
console.log(car);
//car.name = true //error
//----------------------------------------------------------------------//
// const myobj: { name: string, rollNo: number } = {
//     name: "stu1",
//     as rollNo is not given value ...this object will crate error
// }
//but we can use optional property to resolve this error
var myobj2 = {
    name: "dhrupal"
};
//--------------------------------------------------------------------------------//
// Index Signatures 
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
var arr = [1, 2];
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
