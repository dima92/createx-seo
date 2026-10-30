export const initSlider = () => {
  if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".cases__slider")
  ) {
    new Swiper(".cases__slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,

      navigation: {
        nextEl: ".cases__arrow--next",
        prevEl: ".cases__arrow--prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".testimonials__slider")
  ) {
    new Swiper(".testimonials__slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,

      navigation: {
        nextEl: ".testimonials__arrow--next",
        prevEl: ".testimonials__arrow--prev",
      },
    });
  }
};
