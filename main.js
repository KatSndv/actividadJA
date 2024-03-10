//carousel inicio //
const container = document.querySelector('.carousel-container');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carouselpreincripciones').length;


function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translation = -currentIndex * 213; // Ancho de cada imagen + margen
    container.style.transform = `translateX(${translation}px)`;
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

// Llama a la función para reorganizar las imágenes al cargar la página /hace que los botones solo se muevan entre las imagenescargadas
window.addEventListener('load', reorganizeSlides);

function reorganizeSlides() {
    const slides = document.querySelector('.carousel-container');
    const firstSlide = slides.firstElementChild;
    slides.appendChild(firstSlide.cloneNode(true));
}


//caurosel fin//