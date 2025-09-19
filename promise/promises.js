// In JavaScript, a Promise is an *object* that represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting value. 
// States of a Promise:
// Pending → Initial state, neither fulfilled nor rejected.
// Fulfilled → The operation completed successfully (resolve() called).
// Rejected → The operation failed (reject() called).

const newpro=new Promise(function(resolve,reject){
    //do an async task
    //db calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed')    
        resolve()// to connect the resolve with .then
    },1000)
}) //creation

newpro.then(function(){
    console.log("promise consumed");
    
})//then is connected with resolve

new Promise(function(resolve,reject){
    setTimeout(function()  {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log('async2 resolved');
    
 })
//NOTES 
// promise
//   .then(result => {
//     console.log(result);  // Runs if resolved
//   })
//   .catch(error => {
//     console.log(error);   // Runs if rejected
//   })
//   .finally(() => {
//     console.log("Promise finished (either resolved or rejected).");
//   });

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"deepa", email:"deepa.gmail.com"})

    },1000)
}).then(function(user){
    console.log(user);
    
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hitesh",email:"hitesh@gmail.com"})
        }
        else{
            reject('ERROR')
        }
    })

},1000)
const username=promise4.then((user)=>{
    console.log(user);
    return user.username
    
}).then(()=>{ //chaining
     console.log(username);
     
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("The promise is either resolved or rejected")) //will always execute
console.log(username);

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hitesh",email:"hitesh@gmail.com"})
        }
        else{
            reject("EROOR")
        }
    },1000)
},1000)
async function solvepromise5(){
   try{
    const response=await promise5
    console.log(error);
    
   }
   catch(error){
    console.log(error);
    
   }
    
}
solvepromise5()

// await is used inside an async function.
// It pauses execution of that function until a Promise is resolved or rejected.
// While the function is paused, the rest of your program continues running (non-blocking).

async function getAllUsers(){
    try{
    const response=await fetch('https://jsonplaceholder.typicode.com/users') //api call
    // console.log(response);
    const data=await response.json()
    console.log(data);
    }
    catch(error){
        console.log(error);
    } 
    
}
getAllUsers()

//same code with .then and .catch

fetch ('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);

})
.catch((error)=>console.log(error))