"use sctrict"; //treat all JS code as newer version

const a = 56 
const b = "abc"
const c = true
// const d; //const cannot be declared without initialization
let d;

console.log(typeof a) //a is no. 
console.log(typeof b) //b is string 
console.log(typeof c) //c is boolean
console.log(typeof d) //d is undefined
console.log(typeof null) //null is an obj
console.table([typeof a,typeof b,typeof c,typeof d,typeof null,typeof NULL,typeof undefined])
//in JS use null donot use NULL for specifing empty status


// We can also use var for variables but it has some disad. 
//ex for problem:
var g = 10;
console.log("before if block");
console.log(g);
if(1<10){
    var g = 20
    console.log("inside if block");
    console.log(g);
}
console.log("after if block");
console.log(g)


// -------------------------------------------------------------------------------------
//Primitive 
// 7 types: Strings, Number, Boolean, null, undefined, symbol(to make something unique), bigInt

let A = Symbol("abc")
let B = Symbol("abc")

console.log(A===B);//false bcz we hve used Symbol

//nonPrimitive
//functions
const funct = function(){
    console.log("jai bajarangbali");
}
console.log(typeof funct);//function

//arrays
let v = ["a","b","c"]
console.log(v)
console.log(v[0],v[1],v[2])
console.log(typeof v);//object

//objects
const obj = {
    name  : "abc",
    age : 100
}
console.log(obj);
console.log(obj.name,obj.age);
console.log(typeof obj);//object

