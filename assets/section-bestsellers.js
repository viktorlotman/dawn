document.addEventListener('DOMContentLoaded', () => {
  const bestsellers = document.querySelectorAll('section .Bestsellers');
  bestsellers.forEach((section) => {
    const slider = section.querySelector('[bestsellers-slider]');
    const buttonNext = section.querySelector('[btn-slider-next]');
    const buttonPrev = section.querySelector('[btn-slider-prev]');

    const swiper = new Swiper(slider, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 32,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
    });
  });
});
