// primitive 
//7 type: String (callbyval), Number, boolean, null, undefined, Symbol, BigInt

const score=100

//reference (non premitive)
//array, objects, functions

const isLoggedIn=false
const outTemp=null;
let userEmail
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id)
console.log(anotherId)
console.log(id===anotherId) //false

const bigNumber=1234567890987654321123456789n
console.log(bigNumber)

const heros=["saktiman","batman","ironman"] //array
let myobj={
    name:"hitesh",
    age:22
}//object
console.log(myobj)
console.log(typeof myobj) //object
// func as var
const myfunction=function(){
    console.log("myfunc");
}
console.log(myfunction)
console.log(typeof myfunction) //function




