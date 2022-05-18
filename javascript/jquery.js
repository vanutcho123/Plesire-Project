$(document).ready(function () {
  $(".owl-carousel:first").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".owl-carousel.second").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dot: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".owl-carousel:last").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});

config = {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
};
