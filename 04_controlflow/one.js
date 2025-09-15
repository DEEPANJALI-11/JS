// only one part of code should run

// if(condition){

// }
// if(false){
//     // will never enter here
// }

const isUserloggedin=true
const temp=41
if(isUserloggedin){
    console.log("hello");
    
}
// <,>,==,!=,<=,>=,===
if(2==="2"){
    console.log("true");
    
}
else{
    console.log("not true");
    
}

//switch 
const month=3
switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("february");
        
        break;
    case 3:
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break;

    default:
        console.log("no month selected");
        
        break;
}
// false,0,-0,BigInt on, "", null, undefined, NaN
//true ,"0", 'false', " ",[],{}, function (){}

const emptyObj={}
// if(Object.keys )

// Nullish Coalescing operator (??) : null undefined
// The nullish coalescing operator (??) returns the right-hand operand if the left-hand 
// operand is null or undefined; otherwise, it returns the left-hand operand
let val1; 
val1=5??10
val1=null??10
val2=undefined??79

console.log(val1); //10
console.log(val2); //79

