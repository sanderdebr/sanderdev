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
    const project = document.querySelector('.project');
    const projectContent = document.querySelector('.project__wrapper');
    const swiper = document.querySelector('.swiper');
    const body = document.querySelector('body');
    const back = document.querySelector('.project__back');

    const openItem = e => {
        const swipeItem = e.target.parentNode;
        gsap.to(project, .6, {display: 'block', height: 'fit-content', ease: Power4.easeInOut});
        gsap.fromTo(projectContent, 1, {opacity: 0}, {opacity: 1, ease: Power4.easeInOut});
        body.style.overflowY = 'scroll';
        //gsap.to(swiper, .3, {marginTop: '-100vh', ease: Power4.easeInOut});
    }

    Array.from(swiperTitles).forEach(title => {
        title.addEventListener('click', (e) => openItem(e) );
    })
}

export const swipeClose = () => {
    const project = document.querySelector('.project');
    const projectContent = document.querySelector('.project__wrapper');
    const back = document.querySelector('.project__back');

    const closeItem = () => {
        gsap.fromTo(projectContent, .6, {opacity: 1}, {opacity: 0, ease: Power4.easeInOut});
        gsap.to(project, 1, {display: 'none', height: '0%', ease: Power4.easeInOut})
        body.style.overflowY = 'hidden';
    }

    back.addEventListener('click', closeItem);
    
}

export const linkHover = (e, bool) => {
    if (bool) {
        document.body.style.cursor = 'pointer';
        e.target.classList.toggle('active');
    } else {
        e.target.classList.toggle('active');
    }
}