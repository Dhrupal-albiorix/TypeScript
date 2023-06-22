// function logScores(firstName, ...scores) {
//     console.log(firstName, scores);
// }
// //firstName and scores are assigned to any
//logScores("Ben", 50, 75, 85); // outputs Ben and [50, 75, 85]
function logScores(firstName) {
    var scores = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        scores[_i - 1] = arguments[_i];
    }
    console.log(firstName, scores);
}
// logScores("Mike", 90, 65, "65"); err as "65" is string 
logScores("Mike", 90, 65, 5);
