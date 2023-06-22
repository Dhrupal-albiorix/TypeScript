// function add(a: unknown, b: unknown) {
//     return a + b; // error
// }
//correct 
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") { //if statement is called a type guard
        //type guard allows TypeScript to adjust the types of a and b from unknown to number. 
        //Code within the if statement can then operate on a and b.
        return a + b;
    }
    return 0;
}
console.log(add(2, "8"));
console.log(add(2, 2));
//-----------------------------------------------------------------------------------------------------------------
// Type - safe data fetching
// async function getData(path: string): Promise<unknown> {
//     const response = await fetch(path);
//     return await response.json();
// }
// type Person = {
//     id: string;
//     name: string;
// };
// async function getPerson(id: string): Promise<Person | null> {
//     const person = await getData("/people/1"); //returns unknown
//     if (person) {
//         // return person; // error as it will return unknown ...but function getPerson returns typr Person or null
//     }
//     return null;
// }
// We need to check that person on line 13 is in fact of type Person to resolve the type error.
// We can use a type predicate to check that an object is of type Person.
// function isPerson(person: any): person is Person {
//     return "id" in person && "name" in person;
// }
// Notice the return type, person is Person.This is a type predicate;
// it is a special return type that the Typescript compiler uses to know what type a particular value is.
var today = new Date(); //in ts date is type
//console.log(today.getWeekDay()); //Property 'getWeekDay' does not exist on type 'Date'
