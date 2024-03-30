$(function () {
  let currentDate = new Date();
  // console.log(currentDate.getMonth() + 1);
  var date = currentDate.getDate();
  document.getElementById("date").innerHTML = date;
  var month = currentDate.getMonth() + 1;
  document.getElementById("month").innerHTML = month;
  var year = currentDate.getFullYear();
  document.getElementById("year").innerHTML = year;
  // console.log(currentDate.getFullYear());
  // console.log(currentDate.getDate());
  // document.getElementById("dateField").valueAsDate = new Date();

  // $(document).ready(function () {
  //   var today = new Date(),
  //     day = today.getDate().toString().padStart(2, "0"),
  //     month = (today.getMonth() + 1).toString().padStart(2, "0"),
  //     year = today.getFullYear();
  //   $("#datePicker").val(`${year}-${month}-${day}`);
  // });

  var timeElement = document.getElementById("currentTime");
  setInterval(function () {
    var currentTime = new Date();
    timeElement.textContent = currentTime.toLocaleTimeString();
  }, 1000);

  $(".menu__mobile").on("click", function () {
    $(".menu__mobile").toggleClass("menu--open");
  });
  $(".menu__mobile").on("click", function () {
    $(".header__menu").toggleClass("menu--open");
  });

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

  $(".holder__slider").slick({
    infinite: true,
    fade: true,
    nextArrow:
      '<button class="slick-arrow slick-next" aria-label="Next"><svg width="24" height="20"><use href="./images/icons/icons.svg#arrow-right-next"></svg></use></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev" aria-label="Previous"><svg width="24" height="20"><use href="./images/icons/icons.svg#arrow-left-prev"></svg></use></button>',
  });

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./images/sleep/plus.svg" alt="icon plus"></div><div class="quantity-button quantity-down"><img src="./images/sleep/minus.svg" alt="icon minus"></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".quantity-button").on("click", function () {
    var parents = $(this).parents(".holder-slider__info");
    let summ =
      $(".summ", parents).data("nights") * $(".nights", parents).val() +
      $(".summ", parents).data("guests") * $(".guests", parents).val();
    $(".summ", parents).html("$ " + summ + " UDS");
  });

  $(".quantity").each(function () {
    var parents = $(this).parents(".holder-slider__info");
    let summ =
      $(".summ", parents).data("nights") * $(".nights", parents).val() +
      $(".summ", parents).data("guests") * $(".guests", parents).val();
    $(".summ", parents).html("$ " + summ + " UDS");
  });

  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("minus");
  });
});
