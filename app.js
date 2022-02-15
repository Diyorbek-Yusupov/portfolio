window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', ()=>{
        const header = document.querySelector('header');
        header.classList.toggle('stiky', window.scrollY>0);
    })

    const menuBtn = document.querySelector('.menu-btn');
    const navigition = document.querySelector('.navigition');
    const navigitionItems = document.querySelectorAll('.navigition a');

    menuBtn.addEventListener('click', () =>{
        menuBtn.classList.toggle('active');
        navigition.classList.toggle('active');
    });

    navigitionItems.forEach(navItem =>{
        navItem.addEventListener('click', ()=>{
            menuBtn.classList.remove('active');
            navigition.classList.remove('active');
        });
    });

    const scrollBtn = document.querySelector('.scrollToTop-btn');

    window.addEventListener('scroll',() =>{
        scrollBtn.classList.toggle('active', window.scrollY > 500);
    });
    
    scrollBtn.addEventListener('click', () =>{
        // document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });


    window.addEventListener('scroll', ()=>{
        let reveals = document.querySelectorAll('.reveal');

        for(i=0; i<reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if(revealTop<windowHeight-revealPoint){
                reveals[i].classList.add('active');
            }
        }

    })
})