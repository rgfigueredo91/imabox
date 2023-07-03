let carousels = document.querySelectorAll('.carousel');

							carousels.forEach((carousel) => {
							let slides = carousel.querySelectorAll('.slide');
							let dotsContainer = carousel.querySelector('.dots');
							let currentSlide = 0;

							function moveSlides() {
								slides.forEach((slide, index) => {
								if (index === currentSlide) {
									slide.classList.add('active');
								} else {
									slide.classList.remove('active');
								}
								});
							}

							function setActiveDot() {
								let dots = dotsContainer.querySelectorAll('.dot');
								dots.forEach((dot, index) => {
								if (index === currentSlide) {
									dot.classList.add('active');
								} else {
									dot.classList.remove('active');
								}
								});
							}

							function createDots() {
								for (let i = 0; i < slides.length; i++) {
								let dot = document.createElement('div');
								dot.classList.add('dot');
								dot.addEventListener('click', () => {
									currentSlide = i;
									moveSlides();
									setActiveDot();
								});
								dotsContainer.appendChild(dot);
								}
							}

							function next() {
								currentSlide = (currentSlide + 1) % slides.length;
								moveSlides();
								setActiveDot();
							}

							function prev() {
								currentSlide = (currentSlide - 1 + slides.length) % slides.length;
								moveSlides();
								setActiveDot();
							}

							createDots(); // Call the createDots function to generate dots
							moveSlides();
							});