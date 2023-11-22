// Stack Memory --> Primitive datatypes
// We get copy of the variable

let a = "initial"
let b = a 
console.log('a:',a)
console.log('b:',b)
b = "changed"
console.log("after changing b's value :")
console.log('a:',a)
console.log('b:',b)
// b got the cpy of a's value 

// ----------------------------------------------------------
// Heap Memory --> Non-Primitive datatypes
// We get Reference for the variable

let userOne = {
    email : "abc@gmail.com",
    name : "abc"
}
console.log(userOne.email);
console.log(userOne.name);

let userTwo = userOne
userTwo.name = "bcd"
console.log("after changing");
console.log(userOne.email);
console.log(userOne.name);
// by changing userTwo's name userOne's name is also changed bcz of refernce of userOne is given to userTwo