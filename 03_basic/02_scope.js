//globe scope
var c=300
let a=300
//scope {}
if(true){
    //block scope
    let a=10
    const b=20
    // console.log("Inner:",a) //Inner:10
    // var c=30
}
// console.log(a); //300, if it is not defined globally it will throw error 
// console.log(b);//error
// console.log(c);//30


function one(){
    const username="Hitesh"
    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website); //error
    two()
}

// one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        console.log(username+website);    
    }
    // console.log(website);
    
}
// console.log(username);

function addone(num){
    return num+1
}
console.log(addone(5))
const addtwo=function(num){ //hosting
    return num+2
}
addtwo(5) 