const myDate = new Date()

// toLocaleDateString()

const type1 = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
};
const type2 = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',

};
console.log(myDate.toLocaleDateString())// 22/11/2023
console.log(myDate.toLocaleDateString('en-IN',type1))// Wednesday, 22 Nov, 2023

const myDate2 = myDate.toLocaleDateString('en-IN',type2)
console.log(myDate2)// Wed, 22 Nov, 2023, 6:42:45 pm
console.log(typeof myDate2); //string

const myDate3 = new Date().toLocaleDateString('ko-KR',type2)
console.log(myDate3);