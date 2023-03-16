let slideIndex = 0;
let interval = null;

function showSlides(n) {
  if(interval)
  {
    clearInterval(interval);
  }
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  interval = setInterval(() => plusSlides(1), 4000); // Change image every 4 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}
plusSlides(1);
/*Swap Image in hover*/ 
function swapImage(target)
{
  const src = target.src;
  target.src = target.dataset.img;
    target.dataset.img = src;
}
