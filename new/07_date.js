/*let myDate=new Date()
console.log(myDate); //2025-09-10T08:13:44.226Z
console.log(myDate.toString()); //Wed Sep 10 2025 08:14:18 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Wed Sep 10 2025
console.log(myDate.toLocaleString()); //9/10/2025, 8:15:27 AM
console.log(typeof(myDate)); //object

let mycreatedate=new Date(2023,0,23)
console.log(mycreatedate); //2023-01-23T00:00:00.000Z
console.log(mycreatedate.toString()); //Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
let newdate=new Date(2023,0,9,5,3)
console.log(newdate.toLocaleString()); //1/9/2023, 5:03:00 AM
let newdate2=new Date("2023-01-14")
console.log(newdate2); //2023-01-14T00:00:00.000Z
*/
// let d=new Date("01-14-2023")
// let myTimeStamp=Date.now() 
// console.log(myTimeStamp);  //1757492596621
// console.log(d.getTime());  //1673654400000

console.log(Math.floor(Date.now()/1000)); //to get op in seconds

let newDate=new Date()
console.log(newDate);//2025-09-10T08:26:33.482Z

console.log(newDate.getMonth()); //8


//important

newDate.toLocaleString('default',{ //clicl ctrl+spacebar
    weekday:"long",
    day:'Monday'
})



