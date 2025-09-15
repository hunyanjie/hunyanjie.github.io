document.addEventListener("DOMContentLoaded", function() {
    const text = "A healthy and delicious memory";
    const dynamicTextElement = document.getElementById("dynamic-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            dynamicTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 30); // Adjust the speed by changing the timeout value
        }
    }
    typeWriter();
});

window.addEventListener('scroll', function() {
    const triggerPoint = document.getElementById('hero-1618').offsetTop;
    const item = document.getElementsByClassName('cs-item');
    const icons = document.getElementsByClassName('cs-icon');
    const headings = document.getElementsByClassName('cs-h3');
    const texts = document.getElementsByClassName('cs-item-text');

    if (window.scrollY <= triggerPoint) {
        for (let i = 0; i < item.length; i++) {
            item[i].classList.remove('show');
            item[i].classList.add('hide');
        }
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.remove('show');
            icons[i].classList.add('hide');
        }
        for (let i = 0; i < headings.length; i++) {
            headings[i].classList.remove('show');
            headings[i].classList.add('hide');
        }
        for (let i = 0; i < texts.length; i++) {
            texts[i].classList.remove('show');
            texts[i].classList.add('hide');
        }
    }
    if (window.scrollY > triggerPoint) {
        for (let i = 0; i < item.length; i++) {
            item[i].classList.add('show');
            item[i].classList.remove('hide');
        }
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.add('show');
            icons[i].classList.remove('hide');
        }
        for (let i = 0; i < headings.length; i++) {
            headings[i].classList.add('show');
            headings[i].classList.remove('hide');
        }
        for (let i = 0; i < texts.length; i++) {
            texts[i].classList.add('show');
            texts[i].classList.remove('hide');
        }
    }
});