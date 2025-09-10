console.log("2">1) //true
console.log("02">1) //true
console.log(null>0) //false
console.log(null==0) //false
console.log(null >=0) //true
// comparisons (<,<,<=,>=) converts null to a number, treating it as 0 or NaN.

console.log(undefined==0) //false
console.log(undefined>0) //false

//avoid these comparisons

//strict check ===
console.log("2"===2) //false