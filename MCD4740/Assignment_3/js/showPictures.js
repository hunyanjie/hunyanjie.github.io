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

Fancybox.bind('[data-fancybox]', {
    Carousel: {
        Toolbar: {
            display: {
                left: ["counter"],
                middle: [
                    "zoomIn",
                    "zoomOut",
                    "toggle1to1",
                    "rotateCCW",
                    "rotateCW",
                    "flipX",
                    "flipY",
                ],
                right: [
                    "autoplay",
                    "fullscreen",
                    "thumbs",
                    "close",
                ],
            },
        },
        Zoomable: {
            Panzoom: {
                panMode: "mousemove",
                mouseMoveFactor: 1.1,
                clickAction: "iterateZoom",
                maxScale: 2,
            },
        },
    },
});