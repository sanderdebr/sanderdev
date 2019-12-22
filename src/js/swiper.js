export const loadSwiper = turnOn => {
    
    const slider = document.querySelector('.swiper');

    if (turnOn) {

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

    } else {
        slider.removeEventListener('mousedown', (e) => {});
        slider.removeEventListener('mouseleave', (e) => {});
        slider.removeEventListener('mouseup', (e) => {});
        slider.removeEventListener('mousemove', (e) => {});
    }
}

export const swipeOpen = () => {
    const swiperTitles = document.querySelectorAll('.swiper__item--title');
    const overlay = document.querySelector('.overlay');
    const swiper = document.querySelector('.swiper');

    const openItem = e => {
        const swipeItem = e.target.parentNode;
        gsap.to(overlay, .6, {height: '100%', ease: Power4.easeInOut})
        //gsap.to(swiper, .3, {marginTop: '-100vh', ease: Power4.easeInOut});
    }

    Array.from(swiperTitles).forEach(title => {
        title.addEventListener('click', (e) => openItem(e) );
    })
}

export const linkHover = (e, bool) => {
    if (bool) {
        document.body.style.cursor = 'pointer';
        e.target.classList.toggle('active');
    } else {
        e.target.classList.toggle('active');
    }
}