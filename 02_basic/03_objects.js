//singleton ->if object made from constructor, The design pattern ensures a class has only one object, providing a global access point, and is used for things like database connections or logging systems. 
//Object.create ->constructor way

//object literals

const mySym=Symbol("key1")

const jsUser={
    name:"Deepanjali", //key value pair here key itself is treated as string
    age:18,
    //mySym:"mykey1",
    [mySym]:"mykey1", //datatype is undefined
    location:"jaipur",
    email:"deepa@gogle.com",
    idLoggedIn:false,
    lastloggindays:["Monday","saturday"]
}
 console.log(jsUser.email) // if we write "email" in object "." can not be used, then have to use []
console.log(jsUser["name"]);
console.log(jsUser.mySym); //mykey1 
console.log(typeof(jsUser.mySym)); //string but it is a symbol datatype

console.log(typeof(jsUser.age)); //number


jsUser.email="hitesh@gmail.com"
console.log(jsUser["email"]); //hitesh@gmail.com 

// Object.freeze(jsUser) //to freeze changes
jsUser.email="abc@gmail.com"
console.log(jsUser["email"]); //hitesh@gmail.com
console.log(jsUser); /* {
  name: 'Deepanjali',
  age: 18,
  location: 'jaipur',
  email: 'hitesh@gmail.com', ->not changed
  idLoggedIn: false,
  lastloggindays: [ 'Monday', 'saturday' ],
  [Symbol(key1)]: 'mykey1' ->symbol is written
} */


  //function (treated as variables)
jsUser.greeting = function (){
    console.log("helloo");
    console.log(`I am ${this.name}`);
    
}
console.log(jsUser.greeting); //helloo
console.log(jsUser.greeting()); //undefined

