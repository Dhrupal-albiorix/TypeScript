// Try creating a new Car using the alias provided
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
};

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};

console.log(car);


///-------------------ex2-------------------------

// A new type is created
type type_alias = number | string | boolean;

// Variable is declared of the new type created
let variable: type_alias;
variable = 1;
console.log(variable);
variable = "geeksforgeeks";
console.log(variable);
variable = true;
console.log(variable);
//variable = function () { }; //error : void' is not assignable

//--------------------ex 3---------------------------

// A new type is created
type anotherType = number | string;
let variable2: string;
function displayId(id: anotherType) {
    if (typeof id === typeof variable2) {
        return "my id is : " + id;
    }
    return "my id is : " + `${id.toString()}`;
}

// Argument of type string is passed into the function
console.log(displayId("AF565"));

// Argument of type number is passed into the function
console.log(displayId(565));

//--------------------------------------------ex 4----------------------------------

// A new type is created
type otherType = "yes" | "no";
let variable3: otherType;
variable3 = "yes"; // no error
console.log(variable3);
//variable3 = "neither"; // error
//console.log(variable3);

//----------------------------------------------- Interfaces ---------------------------

// Interfaces are similar to type aliases, except they ** only ** apply to `object` types.

interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};

