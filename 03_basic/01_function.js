
// function saymyname() {
//     console.log("D");
//  console.log("e");
//  console.log("e");
//  }
 
//  saymyname();

 function add(number1, number2){
    // console.log(number1+number2) //its not return
 }
 add(3,4)//7
 add(3,"4") //34
 add(3,"a") //3a as we are not checking the datatype
 const res=add(3,6) //9
 console.log(res); //undefined
 

 function sum2(number1, number2){
    let result=number1+number2
    return result 
    // or return number1+number2
 }
 let a=sum2(6,7)
//  console.log(a); //13


//another way

function loginusermessage(username ="Sam"){ //sam is a default value so it will never go to checkthe condition  
    if(username===undefined){ //(!username)
        console.log("Please enter a user name");
        return
    }
    return `${username} just loggedin`
}
console.log(loginusermessage("Deepa")) //Deepa just loggedin
console.log(loginusermessage()); //undefined just loggedin


function calculatecartprice(...num1){ //rest or spread operator
    return num1
}
function calculatecartprice2(val1,val2,...num1){ //rest or spread operator
    return num1
}
console.log(calculatecartprice(200,800,400,800)); //[ 200, 800, 400, 800 ] put everything in an array
console.log(calculatecartprice2(300,800,700,600,500)); //[ 700, 600, 500 ] as val1=300, val2=800 and rest are in num1


const user={
    username:"hitesh",
    price:45
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and its price is ${anyobject.price}`); //username is hitesh and its price is 45
    
}
handleobject(user)
handleobject({
    username:"sam",
    price:90
})

const mynewarray=[200,400,600,800]
function returnsecvalue(getArray){
    return getArray[1]
}
console.log(returnsecvalue(mynewarray));
