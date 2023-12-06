function f1(alpha) {
    return alpha.toUpperCase();
}
const v1 = ["a","b","c","d","1","2"];

const v2 = v1.map(f1);
console.log(v1);

console.log(v2);

function f2(char){
    return char.toUpperCase() === char.toLowerCase();
}
const v3 = v1.filter(f2);
console.log(v3);