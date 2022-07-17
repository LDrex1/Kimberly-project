const swiper = new Swiper(".swiper-container", {
  //
  slidesPerView: "auto",
  spaceBetween: 15,
  grabCursor: true,
  direction: "vertical",
  //   loop: true,
  breakpoints: {
    992: {
      slidesPerView: 2.8,
      spaceBetween: 30,
      direction: "horizontal",
    },
  },
  // scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const swiper1 = new Swiper(".swiper-2", {
  //
  slidesPerView: 2,
  spaceBetween: 20,
  grabCursor: true,
  //
  direction: "horizontal",
  loop: true,
  // effect
  effect: "coverflow",
  centeredSlides: false,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  //
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: -20,
      // effect
      coverflowEffect: {
        rotate: 0,
        stretch: 30,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
    },
  },

  // scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
