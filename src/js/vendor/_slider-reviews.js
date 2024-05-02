import Swiper, {Navigation, Pagination, EffectCoverflow, EffectCards, EffectFlip, EffectCube} from 'swiper';

Swiper.use([Navigation, Pagination, EffectCoverflow, EffectCards, EffectFlip, EffectCube]);
const swiper = new Swiper('.Swiper-reviews', {
  slidesPerView: 5,
  spaceBetween: 30,
 centeredSlides: true,
 // loop: true,
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    625: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1145: {
      slidesPerView: 5,
    },
    1920: {
      slidesPerView: 5,
    },
  },
});

