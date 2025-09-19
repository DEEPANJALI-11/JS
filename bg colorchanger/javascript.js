
const randcolor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
// console.log(Math.floor(Math.random()*16));
let change
const startchangecolor=function(){
    if(!change){
    change=setInterval(changebgcolor,1000)
    }
    function changebgcolor(){
        document.body.style.backgroundColor=randcolor()
    }
}
const stopchange=function(){
    clearInterval(change)
    change=null
    //document.body
}
const start=document.querySelector('#start').addEventListener('click',startchangecolor)
const stop=document.querySelector('#stop').addEventListener('click',stopchange)
// start.addEventListener('click',startchangecolor)