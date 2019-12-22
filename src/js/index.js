import '../css/variables.scss';
import '../css/general.scss';
import '../css/nav.scss';
import '../css/swiper.scss';

import * as swiper from './swiper.js';

// Load swiper
swiper.loadSwiper()
swiper.swipeOpen();

const linkHover = (e, bool) => {
    console.log(bool);
    if (bool) {
        document.body.style.cursor = 'pointer';
        e.target.classList.toggle('active');
    } else {
        e.target.classList.toggle('active');
    }
}

const links = document.querySelectorAll('.link');
Array.from(links).forEach(link => link.addEventListener('mouseover', e => linkHover(e, true)));
Array.from(links).forEach(link => link.addEventListener('mouseout', e => linkHover(e, false)));

console.log(links);