// initially initial value will go as accumulator
const mynums=[1,2,3]
const mytotal=mynums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
//     acc:0 and currval:1
//     acc:1 and currval:2
//     acc:3 and currval:3
    return acc+currval
},0 ) //initial value 
console.log(mytotal); //6 
const mytot=mynums.reduce((acc,curr)=> acc+curr,0)
console.log(mytot); //6

const shopp=[
    {
        item:"js course",
        price:999
    },{
        item:"ds",
        price:1000
    },
    {
        item:"dsa",
        price:800
    }
]
const total=shopp.reduce(
     (acc,item)=> acc+item.price,0)
console.log(total);

