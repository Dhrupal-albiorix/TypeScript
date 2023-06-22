var data1;
var data2;
data1 = {}; // OK
data2 = {}; // OK
console.log(data1);
console.log(data2);
// data1 = "string"; // Error
data2 = "string"; // OK
//console.log(data1);
console.log(data2);
// data1 = 42; // Error
data2 = 42; // OK
//console.log(data1);
console.log(data2);
// data1 = null; // Error
// data2 = null; // Error
console.log(data1);
console.log(data2);
//data1 = undefined; // Error
//data2 = undefined; // Error
//console.log(data1);
//console.log(data2);
