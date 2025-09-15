//for of
const arr=[1,2,3,4,5]
for(const num of arr){ //for(iterator of object)
    // console.log(num);
    
}
const greet="hello everyone"
// for(const i of greet)
        // console.log(i);
      

//maps
const map=new Map() 
map.set('In',"India")
map.set('AM',"America")
map.set('Jp',"Japan")
for(const [key,value] of map){
    console.log(key,':-',value);
    
}

const games ={ //for objects
    'game1':'NFS',
    'game2':'FREEFIRE'
}
//for in loop
for(const key in games){
    console.log(`${key} :- ${games[key]}`);
    
}

const program=['js','array','py']
for(const i in program){
    console.log(program[i]);
    
}