import { elements } from './elements.js';

export const loadSwiper = turnOn => {

    if (turnOn) {

        let isDown = false;
        let startX;
        let scrollLeft;
        
        elements.swiper.addEventListener('mousedown', (e) => {
            isDown = true;
            elements.swiper.classList.add('active');
            startX = e.pageX - elements.swiper.offsetLeft;
            scrollLeft = elements.swiper.scrollLeft;
        });
        elements.swiper.addEventListener('mouseleave', () => {
            isDown = false;
            elements.swiper.classList.remove('active');
        });
        elements.swiper.addEventListener('mouseup', () => {
            isDown = false;
            elements.swiper.classList.remove('active');
        });
        elements.swiper.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - elements.swiper.offsetLeft;
            const walk = (x - startX) * 1.5; //scroll-fast
            elements.swiper.scrollLeft = scrollLeft - walk;
        });

    } else {
        elements.swiper.removeEventListener('mousedown', (e) => {});
        elements.swiper.removeEventListener('mouseleave', (e) => {});
        elements.swiper.removeEventListener('mouseup', (e) => {});
        elements.swiper.removeEventListener('mousemove', (e) => {});
    }
}

export const swipeOpen = () => {

    // Open modal function
    const openItem = e => {
        gsap.fromTo(elements.project, .6, {opacity: 0}, {opacity: 1, display: 'block', height: '100%', ease: Power4.easeInOut});
        elements.body.style.overflowY = 'scroll';

        // Load data based on data link attr
        const dataLink = e.target.dataset.link;

        // Load data in project details modal
        const getData = async dataLink => {
            try {
                const response = await fetch(`./data/${dataLink}.json`);
                const result = await response.json();
                if (result) {
                    // Set data to retrieved json data
                    elements.projectSubTitle.innerText = result.subTitle;
                    elements.projectTitle.innerText = result.title;
                    elements.projectText.innerText = result.text;
                } else {
                    throw err;
                }
            } catch (err) {
                alert(err);
            }
        }

        getData(dataLink);

    }

    // Open modal event listeners on
    Array.from(elements.swiperLinks).forEach(link => {
        link.addEventListener('click', (e) => openItem(e) );
    })
}

export const swipeClose = () => {

    const closeItem = () => {
        gsap.to(elements.projectImages, 1, {opacity: 0, display: 'none', ease: Power4.easeInOut})
        gsap.to(elements.project, 1, {opacity: 0, display: 'none', ease: Power4.easeInOut})
        body.style.overflowY = 'hidden';
    }
    elements.back.addEventListener('click', closeItem);
}

export const linkHover = (e, bool) => {
    if (bool) {
        document.body.style.cursor = 'pointer';
        e.target.classList.toggle('active');
    } else {
        e.target.classList.toggle('active');
    }
}