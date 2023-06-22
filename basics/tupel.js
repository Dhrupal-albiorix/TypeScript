//applicable for only primitive type elements
// boolean, string, and number the order matters
// define our tuple
var ourTuple;
// initialize correctly
console.log("A tuple is a typed array with a pre-defined length and types for each index.Tuples are great because they allow each element in the array to be a known type of value.To define a tuple, specify the type of each element in the array: ");
ourTuple = [5, false, 'Coding God was here'];
//we can push element according to last element type defined
ourTuple.push('i am last push , as last data type is string ..i am not wrong');
console.log(ourTuple);
//------ wrong way -------
var exTupel;
// exTupel=[22 , "dd" , false]
//Readonly Tuple
// const readOnlyArr : [boolean ,string ] error with const..as we gonna assign values in next step in same delcearation
var readOnlyArr;
readOnlyArr = [true, "ssd"];
//readOnlyArr.push("34") error
