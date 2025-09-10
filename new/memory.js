// stack(premitive), heap(non premative)
// stack-> copy will be given of all var
//  heap-> references of var is given

let myYtube="Deepanjali"
let anothername=myYtube  //a copy is passed
anothername="chaiorcode"
console.log(myYtube) //Deepanjali
console.log(anothername) //chaiorcode

let user1={
    email:"user@google.com",
    upi:"abc@ybl",

}
 let user2=user1 //a reference is passed
 user2.email="user2@google.com"
 console.log(user1.email)  //user2@google.com
 console.log(user2.email) //user2@google.com