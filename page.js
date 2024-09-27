let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-inner img');
const totalSlides = slides.length;

function move(n) {
  currentIndex = (currentIndex + n + totalSlides) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

document.querySelectorAll('.image').forEach(function(image) {
  image.addEventListener('click', function() {
      var overlayId = this.getAttribute('id').replace('image', 'overlay');
      document.getElementById(overlayId).style.visibility = 'visible';
      document.getElementById(overlayId).style.opacity = 1;
  });
});

document.querySelectorAll('.close').forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
      var overlayId = this.getAttribute('id').replace('close', 'overlay');
      document.getElementById(overlayId).style.visibility = 'hidden';
      document.getElementById(overlayId).style.opacity = 0;
  });
});