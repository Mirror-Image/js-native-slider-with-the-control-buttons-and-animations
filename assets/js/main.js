let slider = document.querySelectorAll('.slider-item');

let currentSliderItem = 0;
let sliderInterval = setInterval(nextActiveSlide, 3000);

let currentPrevSliderItem = 4;
let prevSliderInterval = setInterval(nextPrevSlide, 3000);

let playing = true;
let pausePlayButton = document.querySelector('#pause-play');

let nextButton = document.querySelector('#next');
let previousButton = document.querySelector('#previous');

let sliderPanel = document.querySelectorAll('.slider-panel');

for (let i = 0; i < sliderPanel.length; i++) {
    sliderPanel[i].style.display = 'flex';
}

pausePlayButton.onclick = function () {
    if (playing) pauseSlideShow();
    else playSlideShow();
};

nextButton.onclick = function () {
    pauseSlideShow();
    nextActiveSlide();
    nextPrevSlide();
};

previousButton.onclick = function () {
    pauseSlideShow();
    prevPrevSlide();
    prevActiveSlide();
};

//---------------------------------------------------------------------
document.addEventListener('keydown', keyNavigation);

function keyNavigation(event) {

    if (event.code === 'ArrowLeft') { //стрелка влево
        pauseSlideShow();
        prevActiveSlide();
        prevPrevSlide()
    }
    if (event.code === 'ArrowRight') { //стрелка вправо
        pauseSlideShow();
        nextActiveSlide();
        nextPrevSlide();
    }
    if (event.code === 'Space') { //пробел
        if (playing) pauseSlideShow();
        else playSlideShow();

    }
};

//---------------------------------------------------------------------

function nextActiveSlide() {
    goToActiveSlide(currentSliderItem + 1);
}

function nextPrevSlide() {
    goToPrevSlide(currentPrevSliderItem + 1);
}

function prevActiveSlide() {
    goToActiveSlide(currentSliderItem - 1);
}

function prevPrevSlide() {
    goToPrevSlide(currentPrevSliderItem - 1);
}

function goToActiveSlide(n) {
    slider[currentSliderItem].className = 'slider-item';
    currentSliderItem = (slider.length + n) % slider.length;
    slider[currentSliderItem].className = 'slider-item active';
}

function goToPrevSlide(n) {
    slider[currentPrevSliderItem].className = 'slider-item';
    currentPrevSliderItem = (slider.length + n) % slider.length;
    slider[currentPrevSliderItem].className = 'slider-item prev';
}

// function nextSliderItem() {
//     slider[currentSliderItem].className = 'slider-item';
//     currentSliderItem = (currentSliderItem + 1) % slider.length;
//     slider[currentSliderItem].className = 'slider-item active';
// }
//
// function prevSliderItem() {
//     slider[currentPrevSliderItem].className = 'slider-item';
//     currentPrevSliderItem = (currentPrevSliderItem + 1) % slider.length;
//     slider[currentPrevSliderItem].className = 'slider-item prev';
// }

function pauseSlideShow() {
    pausePlayButton.className = 'far fa-play-circle';
    playing = false;
    clearInterval(sliderInterval);
    clearInterval(prevSliderInterval);
}

function playSlideShow() {
    pausePlayButton.className = 'far fa-pause-circle';
    playing = true;
    sliderInterval = setInterval(nextActiveSlide, 3000);
    prevSliderInterval = setInterval(nextPrevSlide, 3000);
}