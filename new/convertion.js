let score=33
// console.log(typeof(score)); //number
// console.log(typeof score)
// const {score}=req.body
score="33"
score=null //->0
let valueInNumber= Number(score);
console.log(typeof score) //string 
console.log(valueInNumber) //for score="333abc"->NaN
/*"33"=33
"33abc"=NaN
*/ true=1, false=0

let isLoggedIn=1
let boleanIsLoggedIn=Boolean(isLoggedIn)
console.log(boleanIsLoggedIn) //true
/* 1= true, 0=false
""=false
"hitesh"=true */

let someNumber=33
let StringNumber=String(someNumber)
console.log(StringNumber) //33
console.log(typeof StringNumber) //string