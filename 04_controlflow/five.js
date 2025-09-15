const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.map( (num)=> num+10) //it returns automatically
const newnums2=mynums.map( (num)=> {return num+10}) //it returns automatically
console.log(newnums);
console.log(newnums2);


const newnums3=mynums
        .map((num)=> num*10)
        .map((num)=>num+1)
        .filter((num)=>num>50)
console.log(newnums3);


