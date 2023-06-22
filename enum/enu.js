//Numeric enums
var Level;
(function (Level) {
    Level[Level["High"] = 0] = "High";
    Level[Level["Medium"] = 1] = "Medium";
    Level[Level["Low"] = 2] = "Low";
})(Level || (Level = {}));
console.log(Level.High);
console.log(Level.Low);
//Level.High = 5; //error // readonly
// By default, enums are numeric enums, i.e.Fruit.Apple is 0, Fruit.Orange is 1, Fruit.Peach is 2, and Fruit.Pear is 3.
// The number can also be initialized freely:
// enum Fruit {
//     Apple,
//     Orange,
//     Peach,
//     Pear,
// }
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 5] = "Apple";
    Fruit[Fruit["Orange"] = -1] = "Orange";
    Fruit[Fruit["Peach"] = 0] = "Peach";
    Fruit[Fruit["Pear"] = 1] = "Pear";
})(Fruit || (Fruit = {}));
console.log(JSON.stringify(Fruit));
//--------------------------------------------------------String Enums----------------------
var AppStatus;
(function (AppStatus) {
    AppStatus["ACTIVE"] = "ACT";
    AppStatus["INACTIVE"] = "INACT";
    AppStatus["ONHOLD"] = "HLD";
    AppStatus["ONSTOP"] = "STOP";
})(AppStatus || (AppStatus = {}));
function checkStatus(status) {
    console.log(status);
}
checkStatus(AppStatus.ONSTOP);
var Level2;
(function (Level2) {
    Level2["High"] = "H";
    Level2["Medium"] = "M";
    Level2["Low"] = "L";
})(Level2 || (Level2 = {}));
// Level2 = "VH"; //error can not ressign to enum
console.log(Level2);
//---------------------------------------------------------Heterogeneous Enums-------------------
var AppStatus2;
(function (AppStatus2) {
    AppStatus2["ACTIVE"] = "Yes";
    AppStatus2[AppStatus2["INACTIVE"] = 1] = "INACTIVE";
    AppStatus2[AppStatus2["ONHOLD"] = 2] = "ONHOLD";
    AppStatus2["ONSTOP"] = "STOP";
})(AppStatus2 || (AppStatus2 = {}));
console.log(AppStatus2.ACTIVE);
console.log(AppStatus2.ONHOLD);
//-------------------------------------------------------computed values.---------------------------
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 1] = "Friday";
    Weekend[Weekend["Saturday"] = getDate('Dominoz')] = "Saturday";
    Weekend[Weekend["Sunday"] = Weekend.Saturday * 40] = "Sunday"; //3*40 ...as sunday will assign to 3
})(Weekend || (Weekend = {}));
function getDate(day) {
    if (day === 'Dominoz') {
        return 3;
    }
    else {
        return 0;
    }
}
console.log(Weekend.Saturday);
console.log(Weekend.Sunday);
