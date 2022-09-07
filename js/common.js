document.addEventListener('DOMContentLoaded', function() {

/* Slider_Carousel */

const showSlider = new Swiper('.showcase_carousel', {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true,
    navigation: {
        nextEl: '.showcase_navigation__next',
        prevEl: '.showcase_navigation__prew',
    }
})


/* VIDEO Settings */

document.querySelector('video').playbackRate = 2


})
