console.log('Happy developing ✨')

window.addEventListener('scroll', function() {
    const whyChooseUs = document.getElementById('why-choose-us');
    const triggerPoint = document.getElementById('hero-1618').offsetTop + 300; // Adjust the offset as needed
    if (window.scrollY <= triggerPoint) {
        whyChooseUs.classList.remove('show');
    }
    if (window.scrollY > triggerPoint) {
        whyChooseUs.classList.add('show');
    }
    if (window.scrollY > (document.getElementById('hero-1618').offsetHeight - 200)) {
        whyChooseUs.classList.remove('show');
    }
});
