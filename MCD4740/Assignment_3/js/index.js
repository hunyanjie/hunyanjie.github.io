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

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');

    // 显示或隐藏按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.remove('hide');
            backToTopButton.classList.add('show'); // 添加淡出动画
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.classList.remove('show'); // 移除淡出动画
            backToTopButton.classList.add('hide');
            setTimeout(function() {
                backToTopButton.style.display = 'none'; // 完全隐藏按钮
            }, 500);
        }
    });

    // 点击按钮时平滑滚动到顶部
    backToTopButton.addEventListener('click', () => {
        backToTopButton.classList.add('active');
        window.scrollTo({
            top: 0
        });
        setTimeout(function() {
            backToTopButton.classList.remove('active');
        }, 300);
    });
});
