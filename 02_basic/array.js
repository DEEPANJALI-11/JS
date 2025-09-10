const myarr=[0,1,2,3,4]
console.log(myarr[4]);
const myHeros=["superman","Aquaman","Batman"]
//array methods

myarr.push(5)
myarr.push(6)
console.log(myarr);
myarr.pop()
console.log(myarr);
myarr.unshift(9) //[9, 0, 1, 2, 3, 4, 5]
console.log(myarr)
myarr.shift()
console.log(myarr); //[ 0, 1, 2, 3, 4, 5 ]
myarr.shift()
console.log(myarr);// [ 1, 2, 3, 4, 5 ]
console.log(myarr.includes(9)); //false
console.log(myarr.indexOf(3)); //2
const newarr=myarr.join()
console.log(myarr); //[ 1, 2, 3, 4, 5 ]
console.log(newarr); //1,2,3,4,5
console.log(typeof(myarr)); //object
console.log(typeof(newarr)); //string


//slice,splice
console.log("A ",myarr); //A  [ 1, 2, 3, 4, 5 ]
const myn1=myarr.slice(1,3)
console.log(myn1); //[ 2, 3 ]
console.log("b ",myarr); //b  [ 1, 2, 3, 4, 5 ]

const myn2=myarr.splice(1,3)
console.log("C ",myarr); //C  [ 1, 5 ]
console.log(myn2); //[ 2, 3, 4 ]
console.log(myarr);

//slice doesnot manupulate original arr but splice does also consider last index

  


