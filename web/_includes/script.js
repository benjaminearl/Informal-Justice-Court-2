// •••••••Homepage Carousel••••••••• //
const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-slide li');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 0;
const size = carouselItems[0].clientWidth;

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


// •••••••Mobile only script••••••••• //
if (document.documentElement.clientWidth < 1025) {


  // •••••••Homepage accordion••••••••• //
  var acc = document.getElementsByClassName("accordion-opener");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      var panel = this.nextElementSibling;
      for(j = 0; j < acc.length; j++) {
        if (panel.style.display === "block") {
          acc[j].nextElementSibling.style.display == "none";
          console.log(acc[j].nextElementSibling)
        }
      }

      /* Toggle between hiding and showing the active panel */
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

// •••••••Article Menu••••••••• //


}
