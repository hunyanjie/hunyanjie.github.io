const lenis = new Lenis({
    wrapper: window,
    smoothWheel: true,
    duration: 1.2,
    easing:
        (x) => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            },
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    autoResize: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
