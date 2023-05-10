// Main quick menu swiper
var swiper1 = new Swiper(".swiper2", {
  slidesPerView: 8,
  loop: true,
  slidesPerGroup: 2,
  slidesPerGroupSkip: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $(".navbar-menu__item").hover(
    function () {
      $(this).find(".menu__depth2").stop().slideDown(200);
    },
    function () {
      $(this).find(".menu__depth2").stop().slideUp(200);
    }
  );
});
