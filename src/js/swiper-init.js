var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  preloadImages: false,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

mySwiper.autoplay.start()
