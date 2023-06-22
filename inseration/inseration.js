var obj1 = { prop1: "length", prop2: "width" };
var obj2 = { prop1: "length", prop2: "width" };
var obj3 = { prop1: "", prop2: "", prop3: "" };
var obj4 = { prop1: "", prop2: "", prop3: "" };
obj3.prop3 = "height";
console.log(obj3.prop3);
obj4.prop1 = "length";
console.log(obj4.prop1);
console.log(obj3 == obj4); // false
console.log(typeof obj3 == typeof obj4); // true
console.log(typeof obj1 == typeof obj2); // true
