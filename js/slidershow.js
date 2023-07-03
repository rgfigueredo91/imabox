var slides = document.querySelectorAll('.slide');
var dotsContainer = document.querySelector('.dots-container');
var dots = [];

// Create dots for each slide
for (var i = 0; i < slides.length; i++) {
  var dot = document.createElement('span');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
  dots.push(dot);
}

var currentSlide = 0;

// Show the first slide and set the first dot as active
slides[currentSlide].style.display = 'block';
dots[currentSlide].classList.add('active');

// Function to switch to the next slide
function nextSlide() {
  slides[currentSlide].style.display = 'none';
  dots[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].style.display = 'block';
  dots[currentSlide].classList.add('active');
}

// Event listener for the next button
document.getElementById('next-btn').addEventListener('click', nextSlide);

// Set interval to automatically switch to the next slide every 3 seconds
setInterval(nextSlide, 3000);