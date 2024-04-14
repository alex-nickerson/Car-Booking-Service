// IMAGE SLIDERS

const slides = document.querySelectorAll(".slides img");
const slidesTwo = document.querySelectorAll(".slidesTwo img");
let slideIndex = 0;
let slideIndexTwo = 0;
let intervalId = null;
let intervalIdTwo = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
    if(slidesTwo.length > 0){
        slidesTwo[slideIndex].classList.add("displaySlide");
        intervalIdTwo = setInterval(nextSlideTwo, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function showSlideTwo(index){
    if(index >= slidesTwo.length){
        slideIndexTwo = 0;
    }
    else if(index < 0){
        slideIndexTwo = slidesTwo.length - 1;
    }

    slidesTwo.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slidesTwo[slideIndexTwo].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlideTwo(){
    clearInterval(intervalIdTwo);
    slideIndexTwo--;
    showSlideTwo(slideIndexTwo);
}

function nextSlideTwo(){
    slideIndexTwo++;
    showSlideTwo(slideIndexTwo);
}