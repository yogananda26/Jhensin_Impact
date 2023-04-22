let slidesIndex = 1;
showSlide(slidesIndex);

function plusSlide(n) {
  showSlide(slidesIndex += n);
}

function currentSlide(n) {
  showSlide(slidesIndex = n);
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  if (n > slides.length) {slidesIndex = 1}    
  if (n < 1) {slidesIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slidesIndex-1].style.display = "block";  
}

const navbar = document.querySelector(".header1");

function openModal() {
  document.getElementById("myModal").style.display = "block";
  navbar.style.zIndex = -1;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  navbar.style.zIndex = 5;
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}