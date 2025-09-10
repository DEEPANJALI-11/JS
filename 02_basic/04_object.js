//  const tinderser=new Object() ->singleton object

const newuser={}
newuser.id="123abc"
newuser.name="sunny"
console.log(newuser); //{ id: '123abc', name: 'sunny' }
const regularuser={
    email:"abc@gmail.com",
    fullname:{
        firstname:"hitesh",
        lastname:"kumar"
    }
}
//console.log(regularuser.fullname);


const obj1={
    1:"a",
    2:"b"
}
const obj2 ={
    2:"b",
    3:"c",
    4:"d"
}
// const obj3={obj1,obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3=Object.assign(obj1,obj2)
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj4=Object.assign({},obj1,obj2,obj3) //-> {} assigning objects here
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } it overwrites the dublicate values


const obj5={...obj1,...obj2}
// console.log(obj5);


const users=[
    {
        id:1,
        email:"1@gmail.com"
    },
    {
        id:2,
        email:"2@gmail.com"
    },
    {
        id:3,
        email:"3@gmail.com"
    }
]
console.log(users[1].email) //2@gmail.com
console.log(newuser);

console.log(Object.keys(newuser)); //[ 'id', 'name' ]
console.log(Object.values(newuser)); //[ '123abc', 'sunny' ]
console.log(Object.entries(newuser)); //[ [ 'id', '123abc' ], [ 'name', 'sunny' ] ]
console.log(newuser.hasOwnProperty('isloggedin')); //false


const course={
    coursename:"js in hindi",
    courseprice:999,
    courseinstructor:"Hitesh"
}

console.log(course["courseinstructor"]); //hitesh
//or we can write like this
const {courseinstructor}=course //object destructure 
console.log(courseinstructor); //hitesh
const {courseinstructor:teacher}=course
console.log(teacher); //hitesh

//react
// const navbar=({company})=>{ //destructure

// }
// navbar(company="htesh")

//API 
//json
// {
//     "name":"deepa",
//     "coursename":"js in hindi",
//     "price":"free"
// }
//in form of array
// [
//     {},
//     {},
//     {}
// ]
