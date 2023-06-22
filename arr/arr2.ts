// count the frequency of each number in an array
// for eg: input => [10, 12, 45, 12, 10, 40, 45, 40, 40, 45, 45, 20, 20]
const arr1 = [10, 12, 45, 12, 10, 40, 45, 40, 40, 45, 45, 20, 20];
arr1.forEach((item, index) => {
    console.log(item, index);
})
const counts = {};
for (const num of arr1) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(counts);

const ab = arr1.reduce((p: Record<string, number>, c: number) => {
    console.log(p[c])
    return (p[c] = (p[c] || 0) + 1, p)
}, {})

console.log(ab)