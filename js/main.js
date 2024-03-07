$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    nextArrow:
      '<button class="slick-arrow slick-next" aria-label="Next"><svg width="24" height="20"><use href="./images/icons/icons.svg#arrow-right-next"></use></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev" aria-label="Previous"><svg width="24" height="20"><use href="./images/icons/icons.svg#arrow-left-prev"></use></button>',
    asNavFor: ".slider-dots",
  });

  $(".slider-dots").slick({
    arrows: false,
    sliderToShow: 4,
    sliderTOScroll: 4,
    asNavFor: ".header__slider",
  });
});
