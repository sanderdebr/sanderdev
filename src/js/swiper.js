const loadSwiper = () => {
    const slider = document.querySelector('.swiper');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
}

const swipeOpen = () => {
    const swiperTitles = document.querySelectorAll('.swiper__item--title');
    const overlay = document.querySelector('.overlay');

    const openItem = e => {
        const swipeItem = e.target.parentNode;
        gsap.to(overlay, .6, {height: '100%', ease: Power4.easeInOut});
    }

    Array.from(swiperTitles).forEach(title => {
        title.addEventListener('click', (e) => {
            openItem(e);
        })
    })
}

export { loadSwiper, swipeOpen };