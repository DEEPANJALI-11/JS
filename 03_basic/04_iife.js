//Immediately Invoked Function Expressions (IIFE)
//An IIFE (Immediately Invoked Function Expression) is a JavaScript design pattern where a function is defined and 
// executed immediately after its creation, often by enclosing it in parentheses () and then calling it with another 
// set of parentheses (), like (function(){ ... })();. This pattern is used to create a private, local scope for variables,
//  preventing them from polluting the global scope and helping to avoid naming conflicts

//used for reducing global scopes pollution, to reduce glocal scopes or variables 
(function chai (){
    console.log("coonected");
    
})(); //; is used to end it

// we are not calling it later by using (), this is returning 

( (name)=>{ //taking parameter
    console.log(`disconnected ${name}`);
    
}) ('hitesh'); //passing argument

 ( (num1,num2)=>{
    console.log(num1+num2);
    
 })(4,5);