document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
	    perPage: 3,
        autoplay: true,
        interval: 2500,
        arrows: false,
        loop: true,
        breakpoints: {
            768: {
                perPage: 1,
            },
            1200: {
                loop: false,
                perPage: 2,
            },
        }
    }).mount();
});