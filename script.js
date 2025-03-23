document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("start-btn");

    if (startBtn) {
        startBtn.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});let currentIndex = 0;
let modalIndex = 0;

// Função para alternar slides do slider principal
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    document.querySelector(".slider").style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

let currentModalSlide = 0;
let currentImageIndex = 0;
let modalSlides;

function openModal(arteIndex) {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";

    modalSlides = document.querySelectorAll(".modal-slide");
    
    // Oculta todas as artes e exibe apenas a correspondente
    modalSlides.forEach(slide => slide.style.display = "none");
    const activeSlide = document.querySelector(`.modal-slide[data-arte="${arteIndex}"]`);
    activeSlide.style.display = "block";

    currentModalSlide = arteIndex - 1; // Ajuste para índice baseado em 0
    currentImageIndex = 0;

    updateModalImages();
}

function updateModalImages() {
    const images = modalSlides[currentModalSlide].querySelectorAll("img");

    images.forEach(img => img.style.display = "none");
    images[currentImageIndex].style.display = "block";
}

function prevModalSlide() {
    const images = modalSlides[currentModalSlide].querySelectorAll("img");
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateModalImages();
}

function nextModalSlide() {
    const images = modalSlides[currentModalSlide].querySelectorAll("img");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateModalImages();
}

function closeModal(event) {
    const modal = document.getElementById("modal");
    
    // Fecha apenas se clicar fora do conteúdo do modal
    if (!event || event.target === modal) {
        modal.style.display = "none";
    }
}


document.getElementById("modal").addEventListener("click", closeModal);
