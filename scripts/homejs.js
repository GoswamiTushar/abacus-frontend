var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
var previousButton = document.querySelector('#previous');
var nextButton = document.querySelector('#next');

var scale = 'scale(1)';

var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navigation-bar');
var navItems = document.querySelector('.nav-items');


document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
document.body.style.msTransform =   scale;       // IE 9
document.body.style.transform = scale; 

// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

  var index = 0, time = 2000;
  slides[index].classList.add('active');  
  
  setInterval( () => {
    slides[index].classList.remove('active');
    
    //Go over each slide incrementing the index
    index++;
    
    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0; 
    
    slides[index].classList.add('active');

  }, time);
}


burger.addEventListener('click', ()=>{
  navItems.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');

})