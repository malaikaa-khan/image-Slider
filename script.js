/*document.addEventListener('DOMContentLoaded',function(){
    let left=document.querySelector(".left");
    let right=document.querySelector(".right");
    const slideContainer=document.querySelector('.box');
    const slides=slideContainer.getElementsByTagName('img');
    
    let currentIndex=0;
 function showSlides(index){
        for(let i=0;i<slides.length;i++){
            slides[i].classList.remove('active');
            console.log(i)
        }

        slides[index].classList.add('active');
    }


    function showNextSlides(){
        currentIndex=(currentIndex+1) % slides.length;
        showSlides(currentIndex);
    }

    function showPreviousSlides(){
        currentIndex=(currentIndex - 1 + slides.length) % slides.length;
        showSlides(currentIndex);
    }
 
    showSlides(currentIndex);

    left.addEventListener('click',showPreviousSlides);
    right.addEventListener('click',showNextSlides);

});
*/



document.addEventListener('DOMContentLoaded',function(){
    let left=document.querySelector('.left');
    let right=document.querySelector('.right');
    let slideContainer=document.querySelector('.box');
    let slides=slideContainer.getElementsByTagName('img');

    let currentIndex=0;

    function showSlides(index){
        for(let i=0;i<slides.length;i++){
            slides[i].classList.remove('active');
        }
        slides[index].classList.add('active')
    }
    

    function showNextSlides(){
        currentIndex=(currentIndex+1) % slides.length;
        showSlides(currentIndex);
        console.log(currentIndex)
    }

    function showPreviousSlides(){
        currentIndex=(currentIndex - 1 + slides.length) % slides.length;
        showSlides(currentIndex);
        console.log(currentIndex)
    }

    showSlides(currentIndex);

   
    right.addEventListener('click',showNextSlides);
    left.addEventListener('click',showPreviousSlides);

})