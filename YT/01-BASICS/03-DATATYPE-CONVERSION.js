let score = "07"
let valueinN = Number(score)
console.log(valueinN); //-> 7

score = "07abc"
valueinN = Number(score)
console.log(valueinN); //-> NaN

score = null
valueinN = Number(score)
console.log(valueinN); //-> 0

score = undefined
valueinN = Number(score)
console.log(valueinN); //-> NaN

score = true
valueinN = Number(score)
console.log(valueinN); //-> 1

score = 60
let valueinB = Boolean(score)
console.log(valueinB); //->true

score = 0
valueinB = Boolean(score)
console.log(valueinB); //->false

score = ""
valueinB = Boolean(score)
console.log(valueinB); //->false

score = "ram"
valueinB = Boolean(score)
console.log(valueinB); //->true 

score = 100
let valueinBI = BigInt(score)
console.log(valueinBI);


// comparison(> < >= <=) and equality(== !=) operators works differently
// strict checker === checks the variables considering their datatypes