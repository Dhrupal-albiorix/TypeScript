var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(car);
// Variable is declared of the new type created
var variable;
variable = 1;
console.log(variable);
variable = "geeksforgeeks";
console.log(variable);
variable = true;
console.log(variable);
var variable2;
function displayId(id) {
    if (typeof id === typeof variable2) {
        return "my id is : " + id;
    }
    return "my id is : " + "".concat(id.toString());
}
// Argument of type string is passed into the function
console.log(displayId("AF565"));
// Argument of type number is passed into the function
console.log(displayId(565));
var variable3;
variable3 = "yes"; // no error
console.log(variable3);
var rectangle = {
    height: 20,
    width: 10
};
