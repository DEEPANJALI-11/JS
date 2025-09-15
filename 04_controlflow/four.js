const coding=['js','cpp','py','java']
const values=coding.forEach((item)=>{
    console.log(item);
    return item
})
console.log(values); //undefined

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=> num>4 )
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]


const newnum=myNums.filter((num)=>{
    return num>4
})
console.log(newnum);

const newnums=[1,2,3,4,5,6,7,8,9,10]
newnums.forEach((num)=>{
    if(num>4)
            console.log(num)
})
console.log(newnums);



