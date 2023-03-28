
let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}



function showElement(){
  document.querySelector(".list-one"). style. display = "block";
  document.getElementById ("ham"). style. display = "none";
  document.getElementById ("ham-c"). style. display = "block";

}

document.getElementById ("ham"). onclick= showElement;


document.getElementById ("ham-c"). onclick= hideElement;

function hideElement(){
  document.querySelector(".list-one"). style. display = "none";
  document.getElementById ("ham"). style. display = "block";
  document.getElementById ("ham-c"). style. display = "none";




}
