const slides = document.getElementsByClassName("carousel-item");
const nextBTn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
let currentSlide = 0;
const totalSlides = slides.length;
const dots = document.getElementsByClassName("circle");

function hideAllSlides() {
	for(let slide of slides) {
		slide.classList.remove("carousel-item-visible");
		slide.classList.add("carousel-item-hidden");
	}
	for(let dot of dots) {
		dot.classList.remove("tagged");
	}
}

function nextSlide() {
	hideAllSlides();
	if(currentSlide === totalSlides - 1) {
		currentSlide = 0;
		slides[currentSlide].classList.add("carousel-item-visible");
		dots[currentSlide].classList.add("tagged");
	} else {
		currentSlide++;
		slides[currentSlide].classList.add("carousel-item-visible");
		dots[currentSlide].classList.add("tagged");
	}
}

function prevSlide() {
	hideAllSlides();
	if(currentSlide === 0) {
		currentSlide = totalSlides - 1;
		slides[currentSlide].classList.add("carousel-item-visible");
		dots[currentSlide].classList.add("tagged");
	} else {
		currentSlide--;
		slides[currentSlide].classList.add("carousel-item-visible");
		dots[currentSlide].classList.add("tagged");
	}
}

nextBTn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);
