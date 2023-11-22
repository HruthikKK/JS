// primitive string 
const fname = "Hruthik"
const sname = "KK"
// console.log("My name is :",fname+sname)

console.log(`My name is ${fname} ${sname}`);//always prefer to use this one

// string object
const name = new String("hkk")
console.log(name)

// string primitive and object are different and acts differently with eval() and string object can be treated as string primitive using valueof() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects:~:text=String%20primitives%20and%20String%20objects%20also%20give%20different%20results%20when%20using%20eval().%20Primitives%20passed%20to%20eval%20are%20treated%20as%20source%20code%3B%20String%20objects%20are%20treated%20as%20all%20other%20objects%20are%2C%20by%20returning%20the%20object.%20For%20example%3A


// --------------------------------------------------

// String methods
let s1 = "abcdef GHI"
console.log(s1.length);

// ----------------------------------------------------

console.log(s1.charAt(4))//e
console.log(s1.at(4))//e
console.log(s1.at(-1))//I
//use of at() over charAt()

// -----------------------------------------------------

console.log(s1.toUpperCase());//ABCDEF GHI
console.log(s1.toLowerCase());//abcdef ghi
console.log(s1);//abcdef GHI

// -----------------------------------------------------

let str1 = "abc"
let str2 = "aBc"
let str3 = "bcd"
//comparing strings case insensitively
if(str1.toUpperCase()===str2.toUpperCase()) console.log("true");
else console.log("false");
if(str1.toUpperCase()===str3.toUpperCase()) console.log("true");
else console.log("false");

// -----------------------------------------------------

let score = 100
let x = "sdjfkaj"
console.log(x.concat(score));//sdjfkaj100
console.log(x.concat(" has scored ",score));//sdjfkaj has scored 100

// -----------------------------------------------------

let mail1 = "abcd@gmail.com"
let mail2 = "abcd.gmail.com"
console.log(mail1.endsWith("@gmail.com"));//true
console.log(mail2.endsWith("@gmail.com"));//false
console.log(mail2.endsWith("abcd",4));//true //4 = idx of last char of search word(i.e abcd) +1


// -----------------------------------------------------

let sentence = "My name is shinchan,my friend name is masoa"
let word = "shinchan"
console.log(`ans is ${sentence.includes(word)}`);//true
console.log(`ans is ${sentence.includes("name",3)}`);//true
console.log(`ans is ${sentence.includes("name",4)}`);//false bcz name is starts from 3rd idx
// the no. in the arg list is the idx from where searching shd start

// ------------------------------------------------------

// indexof()
let fIdx = sentence.indexOf("name")
console.log(fIdx);
let sIdx = sentence.indexOf("name",fIdx+1)
console.log(sIdx);
// the second arg is start of search index

// ---------------------------------------------------------

// padEnd()
str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

str2 = '200';

console.log(str2.padEnd(5));
// Expected output: "200  "

// ------------------------------------------------------------
// padStart()

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"

// ------------------------------------------------------------

// repeat()

const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "

// ------------------------------------------------------------

// replace()

paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

// i hve seen only basic use of replace with string

// ------------------------------------------------------------

// replaceAll()

paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// ------------------------------------------------------------

// slice() -->https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// -------------------------------------------------------------

//split() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// -------------------------------------------------------------

//startsWith() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

// -------------------------------------------------------------

//substring() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

//---------------------------------------------------------------

//trim() and variation

let toTrim = "     ABCD is Cat     "
console.log(`"${toTrim}"`);
console.log(`"${toTrim.trim()}"`);
console.log(`"${toTrim.trimStart()}"`);
console.log(`"${toTrim.trimEnd()}"`);

//---------------------------------------------------------------
