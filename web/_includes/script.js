// •••••••Homepage Carousel••••••••• //
const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-slide li');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 0;
const size = 900;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nextBtn.addEventListener('click', ()=>{
  if (counter < carouselItems.length) {
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})

prevBtn.addEventListener('click', ()=>{
  if (counter > 0 ) {
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})


// •••••••Article Menu••••••••• //
function showDiv(){
    if(document.getElementById('showDiv').style.display == 'none'){
        document.getElementById('showDiv').style.display = 'block';
    }else{
        document.getElementById('showDiv').style.display = 'none';
    }
}


