const num=400
console.log(num); //400

const balance= new Number(num)
console.log(balance); //[Number: 400]

console.log(balance.toString().length); //3
console.log(balance.toFixed(4)) //400.0000 for precision value

const othernum=23.89966
console.log(othernum.toPrecision(3)); //23.9

const othernum2=123.89966
console.log(othernum2.toPrecision(3)); //124

const othernum3=1123.89966
console.log(othernum3.toPrecision(3)); //1.12e+3


const hud=1000000
console.log(hud.toLocaleString()); //1,000,000
console.log(hud.toLocaleString('en-In')); //10,00,000


//maths

console.log(Math); //object[Math]{} but shows different op on console
console.log(Math.abs(-56), Math.abs(87)); //56 87
console.log(Math.round(4.3)); //4
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4


console.log(Math.random()); //0.8896347385436318 always between 0-1
console.log(Math.random()*10); //8.765101937026675
console.log((Math.random()*10 )+1); // as the value can be 0
console.log(Math.floor(Math.random()*10 +1)); //8


const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)  )) //8
console.log(Math.floor(Math.random()*(max-min+1)  )+min) //12 always greater than min





