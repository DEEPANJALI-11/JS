const coding=['js','ruby','cpp','python','java']
coding.forEach(function (val){
    // console.log(val);
        
})

coding.forEach( (item)=>{
    // console.log(item);
    
})

function printme(item){
    console.log(item);
    
}

coding.forEach(printme)

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
    
})
//objects in array
const mycoding=[
    {
        langname:'javascript',
        langfile:'js'
    },
    {
        langname:'cplusplus',
        langfile:'cpp'
    }
]

mycoding.forEach( (item)=>{
    console.log(item.langname);
    
})