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
  });

  // Main quick menu swiper
  var swiper2 = new Swiper(".js-quickmenu-swiper", {
    slidesPerView: 8,
    slidesPerGroup: 8,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });

  // js-my-swiper
  // var swiper3 = new Swiper(".js-my-swiper", {
  //   navigation: {
  //     prevEl: ".swiper-button-prev3",
  //     nextEl: ".swiper-button-next3",
  //   },
  //   autoplay: true,
  // });
  // js-my-swiper play/stop control button
  // $(".swiper-button-play").hide();
  // $(".swiper-button-stop").click(function () {
  //   swiper3.autoplay.stop();
  //   $(this).toggle();
  //   $(".swiper-button-play").toggle();
  // });
  // $(".swiper-button-play").click(function () {
  //   swiper3.autoplay.start();
  //   $(this).toggle();
  //   $(".swiper-button-stop").toggle();
  // });

  // 마이카 button
  $("#mycarButton, .dropdown__close-button").click(function () {
    $(".dropdown__menu").toggle();
  });

  // all-menu toggle
  $("#allMenuButton, .all-menu__close").click(function () {
    $("#allMenuWrap").toggle();
  });
});
