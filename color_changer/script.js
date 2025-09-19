// const buttons=document.querySelectorAll('.button');
// const body=document.querySelector('body');
// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click',function(e){
//         if(e.target.id==='gray'){
//             console.log(e.target.id);
            
//             body.style.backgroundColor=e.target.id;
//         }
//         if(e.target.id==='black'){
//             body.style.backgroundColor=e.target.id;
//         }
//         if(e.target.id==='pink'){
//             body.style.backgroundColor=e.target.id;
//         }
//         if(e.target.id==='red'){
//             body.style.backgroundColor=e.target.id;
//         }
//     });
// });

const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        const clor=e.target.id
        if(clor==='gray'){
            body.style.backgroundImage="url('https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg')"
            body.style.backgroundSize="cover"
            body.style.backgroundPosition="center"
            body.style.backgroundRepeat="no-repeat"
            
        }
        if(clor==='black'){
            body.style.backgroundImage="url('https://wallpapers.com/images/featured/doctor-strange-6es4yutxrbl0nas9.jpg')"
            body.style.backgroundSize="cover"
            body.style.backgroundPosition="center"
            body.style.backgroundRepeat="no-repeat"
        }
        if(clor==='pink'){
            body.style.backgroundImage="url('https://rukminim2.flixcart.com/image/704/844/l1l1rww0/poster/i/4/e/small-poster-black-panther-marvel-studio-poster-wall-poster-original-imagd4adhh9pxdav.jpeg?q=90&crop=false')"
            body.style.backgroundSize="cover"
            body.style.backgroundPosition="center"
            body.style.backgroundRepeat="no-repeat"
        }
        if(clor==='red'){
            body.style.backgroundImage="url('https://www.thefactsite.com/wp-content/uploads/2021/05/the-hulk-facts.jpg')"
            body.style.backgroundSize="cover"
            body.style.backgroundPosition="center"
            body.style.backgroundRepeat="no-repeat"
        }
    })
})