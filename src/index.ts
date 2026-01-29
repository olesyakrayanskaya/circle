import './scss/main.scss'
import './scripts/periods'


import { getDisplayData } from './scripts/dataSourse'

import { createDateCircle } from './scripts/circle'
// import { initSwiper } from './scripts/swiper';

createDateCircle('widget-2', getDisplayData);

// initSwiper('.widget-2-info-1');
// initSwiper('.widget-2-info-2');
// initSwiper('.widget-2-info-3');
// initSwiper('.widget-2-info-4');
// initSwiper('.widget-2-info-5');
// initSwiper('.widget-2-info-6');

console.log(getDisplayData())


