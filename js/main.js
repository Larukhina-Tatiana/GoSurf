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
    // slidesToShow: 4,
    // slidesTOScroll: 4,
    asNavFor: ".header__slider",
  });

  $(".surf__slider").slick({
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:
      '<button class="slick-arrow slick-next" aria-label="Next"><svg width="24" height="20"><use href="./images/icons/icons.svg#arrow-right-next"></svg></use></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev" aria-label="Previous"><svg width="24" height="20"><use href="./images/icons/icons.svg#arrow-left-prev"></svg></use></button>',
    // dots: true,
    // responsive: [
    //   {
    //     breakpoint: 1781,

    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1511,
    //     settings: {
    //       slidesToShow: 6,
    //       slidesToScroll: 6,
    //     },
    //   },
    //   {
    //     breakpoint: 1201,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 841,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 551,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 376,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
    asNavFor: ".surf__map-slider",
  });

  $(".surf__map-slider").slick({
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: ".surf__slider",
    focusOnSelect: true,
  });
});
