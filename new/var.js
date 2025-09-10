const accountId =144553      
let accountEmail="abc@gmail.com"
var accountPass="12345"
//  all three assign values in memory

/* why let? -> for variable we can use let or var because initially there was concept of scope  as in var this 
scop problem will arise, so we will use let. */
 let accountState; 
//  this will give undefinrd
//  ; is not mandotary
accountCity="jaipur" 
// we can also declare variable like this but not a good practice

// accountId=2
// not allowed to change const value

accountEmail="qwe@gmail.com"
accountCity="delhi"
// console.log(accountId);
console.log(accountState)
console.table([accountId, accountEmail,accountPass,accountCity,accountState])
