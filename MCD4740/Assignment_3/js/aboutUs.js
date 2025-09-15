window.addEventListener('scroll', function() {
    const triggerPoint = window.innerHeight - document.getElementById('cta-51').getBoundingClientRect().top;
    const title = document.getElementById('about-us-title');
    const texts = document.getElementById('about-us-text');
    const button = document.getElementById('about-us-button');

    if (triggerPoint < 250) {
        title.classList.remove('show');
        title.classList.add('hide');
        texts.classList.remove('show');
        texts.classList.add('hide');
        button.classList.remove('show');
        button.classList.add('hide');
    } else {
        title.classList.add('show');
        title.classList.remove('hide');
        texts.classList.add('show');
        texts.classList.remove('hide');
        button.classList.add('show');
        button.classList.remove('hide');
    }
});