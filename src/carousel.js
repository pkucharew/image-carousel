class Carousel {
  constructor(){
    this.slideContainer = document.querySelector('.slides-container');
  }

  showSlides(slides){
    let output = '';

    for (var i = 0; i < slides.photos.length; i++) {
      output += `<div class='carousel-item' style="background-image:url('${slides.photos[i].url}');"></div>`
    }
    
    document.querySelector('.slides-container').innerHTML = output;
      
    // start with first slide visible
    document.querySelector('.slides-container').firstChild.classList.add('carousel-item-visible');

  }


  nextSlide = () => {
    // get current class
    const current = document.querySelector('.carousel-item-visible');

    current.classList.remove('carousel-item-visible');
  
    if(current.nextElementSibling) {
      current.nextElementSibling.classList.add('carousel-item-visible');

      // add class for slide to animate off-screen
      current.classList.add('carousel-item-transition');

      // remove transition class after 2s
      setTimeout(() => {current.classList.remove('carousel-item-transition');}, 2000);

      // add/remove button disabled state
      document.getElementById('carousel-button-next').disabled = false;
      document.getElementById('carousel-button-prev').disabled = false;

    } else {
      current.classList.add('carousel-item-visible');

      // add/remove button disabled state
      document.getElementById('carousel-button-next').disabled = true;
      document.getElementById('carousel-button-prev').disabled = false;

    }
  }
  prevSlide = () => {
    // get current class
    const current = document.querySelector('.carousel-item-visible');

    current.classList.remove('carousel-item-visible');
    

    if(current.previousElementSibling) {
      // add the reverse class to the 'prev' slides, so the animation will move the slides from left to right.
      current.previousElementSibling.classList.add('carousel-item-visible', 'reverse');
      setTimeout(() => {current.classList.remove('reverse');}, 2500);

      // note to refactor this: the timeout after 2.5s is not a fail-proof method to handle this reverse animation
      current.classList.add('carousel-item-transition', 'reverse');
      setTimeout(() => {current.classList.remove('reverse');}, 2500);

      // remove transition class after 2s
      setTimeout(() => {current.classList.remove('carousel-item-transition');}, 2000);

      // add/remove button disabled state
      document.getElementById('carousel-button-prev').disabled = false;
      document.getElementById('carousel-button-next').disabled = false;

    } else {
      current.classList.add('carousel-item-visible');

      // add/remove button disabled state
      document.getElementById('carousel-button-prev').disabled = true;
    }
  }
}

export const carousel = new Carousel();