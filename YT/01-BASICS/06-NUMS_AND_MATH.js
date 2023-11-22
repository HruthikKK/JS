const score = 100
console.log(score);

const score2 = new Number(400)
console.log(score2);

//to convert number to string
const strscore = score2.toString()
console.log(typeof strscore);
console.log(strscore);

// to round up
const score3 = 35475.396230
console.log(score3.toFixed(2))//round up --> o/p = 35475.40

// to precise or display specific no. of digits
console.log(score3.toPrecision(6))//35475.4
console.log(score3.toPrecision(3))//3.55e+4

//to represent large numbers
const score4 = 1000000000
console.log(score4.toLocaleString('en-IN'))


// -----------------------------MATH------------------------------

let num1 = 3.6
let num2 = 4.3
let num3 = -4.3
console.log(Math.abs(num3));//4.3
console.log(Math.round(num1));//4
console.log(Math.round(num2));//4
console.log(Math.floor(num1));//4
console.log(Math.ceil(num1));//4
console.log(Math.min(2,3,6,2,1,7,-6,8));//-6
console.log(Math.max(2,3,6,2,1,7,-6,8));//8

//generating random number between min and max number
// Math.random() = 0 to 1(0 inclusive and 1 exclusive )
let min = 1
let max = 6

console.log(Math.floor(Math.random() * (max-min+1) + min));

