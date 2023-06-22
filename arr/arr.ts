// function logScores(firstName, ...scores) {
//     console.log(firstName, scores);
// }
// //firstName and scores are assigned to any
//logScores("Ben", 50, 75, 85); // outputs Ben and [50, 75, 85]


function logScores(firstName: string, ...scores: number[]) {
    console.log(firstName, scores);
}
// logScores("Mike", 90, 65, "65"); err as "65" is string 
logScores("Mike", 90, 65, 5)