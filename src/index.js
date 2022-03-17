import { carousel } from './carousel.js'

const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");

// Event listeners
nextButton.addEventListener("click", carousel.nextSlide);
prevButton.addEventListener("click", carousel.prevSlide);


function getSlides() {
    fetch('./assets/photos.json')
    .then(response => response.json())
    .then(data => carousel.showSlides(data))
    .catch(err => console.log(err));
}

getSlides();

