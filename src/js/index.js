import '../css/variables.scss';
import '../css/general.scss';
import '../css/nav.scss';
import '../css/swiper.scss';
import '../css/project.scss';

import * as swiper from './swiper.js';
import { elements } from './elements.js';

// Load swiper
swiper.loadSwiper(true);
swiper.swipeOpen();
swiper.swipeClose();

// Hover links in swiper
Array.from(elements.links).forEach(link => link.addEventListener('mouseover', e => swiper.linkHover(e, true)));
Array.from(elements.links).forEach(link => link.addEventListener('mouseout', e => swiper.linkHover(e, false)));

// Turn of swiper on mobile
if (window.innerWidth < 900) {
    swiper.loadSwiper(false);
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 900) {
        swiper.loadSwiper(false);
    } else {
        swiper.loadSwiper(true);
    }
});