document.addEventListener('DOMContentLoaded', function() {

    const slider = document.querySelector(".imgSlider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const slides = document.querySelectorAll(".imgSlide");
    const slideIcons = document.querySelectorAll(".imgSlide-icon");
    const numberOfSlides = slides.length;
    var slideNumber = 0;

    function nextImage(){
        /*clear all active flags*/
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides-1)){
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }

    function prevImage(){
        /*clear all active flags*/
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber--;

        if(slideNumber < 0){
            slideNumber = numberOfSlides-1;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }

    /*Next Button*/
    nextBtn.addEventListener("click", () =>
    {
        nextImage();
    });

    /* Back Button*/
    prevBtn.addEventListener("click", () =>
    {
        prevImage();
    });

    /*Autoplay*/
    var playSlider;

    var repeater = () => {
        playSlider = setInterval(function(){nextImage()}, 5000);
    }
    repeater();

    //stop the autoplay on mouseover
    slider.addEventListener("mouseover", () => {clearInterval(playSlider)});

    //start the autoplay on mouseout
    slider.addEventListener("mouseout", () => {repeater()});
});