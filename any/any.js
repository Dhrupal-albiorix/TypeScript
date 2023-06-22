// no auto assign any to object properties
var student = {
    name: "Harry Potter",
    age: 12
};
// student.name = true //error 
console.log(student);
//assign any to object property
var student2 = {
    name: "dncjj",
    age: 12
};
console.log(student2);
student2.name = true;
console.log(student2);
var coupon;
coupon = 26;
console.log(coupon);
coupon = 'DEAL26';
coupon = true;
console.log(coupon);
//auto assign any 
var a;
a = 55;
a = "jfhhj";
function logScores(firstName) {
    var scores = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        scores[_i - 1] = arguments[_i];
    }
    console.log(firstName, scores);
}
logScores("Ben", 50, 75, 85); // outputs Ben and [50, 75, 85]
//void ----------------------------------------------------------------------------------------------------------------
var whatCanIHold;
whatCanIHold = undefined;
//whatCanIHold = null; //errr
// whatCanIHold = "something"; //error
console.log(whatCanIHold);
function logMessage(message) {
    console.log(message);
    //return message //error
}
logMessage("hjdg");
var useless = undefined;
//useless = 1; // error
