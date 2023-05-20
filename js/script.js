$(document).ready(function () {
  $(".navbar-menu__item").hover(
    function () {
      $(this).find(".menu__depth2").stop().slideDown(200);
    },
    function () {
      $(this).find(".menu__depth2").stop().slideUp(200);
    }
  );

  // Gnb swiper
  var swiper1 = new Swiper(".swiper1", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
      768: {
        slidesPerView: 8,
      },
      1024: {
        slidesPerView: 8,
      },
    },
  });

  // Main quick menu swiper
  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 8,
    loop: true,
    slidesPerGroup: 8,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 마이카 button
  $("#mycarButton, .dropdown__close-button").click(function () {
    $(".dropdown__menu").toggle();
  });

  // all-menu toggle
  $("#allMenuButton, .all-menu__close").click(function () {
    $("#allMenuWrap").toggle();
  });
});
