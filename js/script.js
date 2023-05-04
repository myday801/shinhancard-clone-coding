var swiper = new Swiper(".mySwiper", {
  slidesPerView: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $(".navbar-menu__item-link").mouseenter(function () {
    $(".menu__depth2").show();
  });

  $(".menu__depth2", ".navbar-menu__item-link").mouseleave(function () {
    $(".menu__depth2").hide();
  });
});
