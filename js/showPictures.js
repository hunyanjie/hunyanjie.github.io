Carousel(document.getElementById("myCarousel"), {
    center: true,
    fill: true,
    slidesPerPage: 1,
    Autoscroll: {
        speed: 6,
        speedOnHover: 1
    },
    LazyLoad: {
        preload: 8
    }
}, {
    Arrows,
    Dots,
    Autoscroll,
    Lazyload
}).init();
