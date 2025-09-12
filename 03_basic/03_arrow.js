const user={
    username:"hitesh",
    price:99,
    welcomessage: function(){
        console.log(`${this.username}, welcome to website`);
       /* console.log((this)); { current context
  username: 'hitesh',
  price: 99,
  welcomessage: [Function: welcomessage] 
}*/
        
    }
}
 user.welcomessage()
user.username="Sam"
user.welcomessage() //Sam, welcome to website
console.log(this); //{} but in inspect it will show window as in browser, window is most used global object
function chai(){
    console.log(this);
    //gives object[global]....
    console.log(this.username); //undefined
    let username="hitesh"
    console.log(this.username); //undefinrd, it doesnot work under function only for objects
    
}
chai()
const chai=function(){
    let username="hitesh"
    console.log(this.username);
    
}
chai() //undefined

const chai=()=>{ //arrow function
    let username="hitesh"
    console.log(this.username); //undefined
    console.log(this); //{}
    
}
chai()
// explicit return
const add=(num1, num2)=>{
    return num1+num2
}
console.log(add(3,4));
 //{} return, () no return
  
//implicit return 
const add2=(num1, num2)=> num1+num2 //or (num1+num2)
console.log(add2(3,4));

const add3=(num1,num2)=> ({username:"hitesh"}) //() is used cause it is returning
console.log(add3(3,2));