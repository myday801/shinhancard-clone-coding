$(document).ready(function () {
  // 마이카 button
  $("#mycarButton, .dropdown__close-button").click(function () {
    $(".dropdown__menu").toggle();
  });

  // Gnb dropdown menu
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
    slidesPerView: 1,
    slidesPerGroup: 1,
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

  // all-menu toggle
  $("#allMenuButton, .all-menu__close").click(function () {
    $("#allMenuWrap").toggle();
  });

  // Promotion swiper
  var swiper3 = new Swiper(".js-promotion-swiper", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
    },
  });
});

// Promotion background-image
let promotionImgList = [
  "thumbnail_vips",
  "honsoo_hotbn",
  "coupon_hotBanner",
  "ai_hotbn",
  "global_invome_tax_hotbn",
  "six_hotbn",
  "labang_hotbn",
  "account_mainbn",
  "global_shop_hotBanner",
  "allthat_hotbanner",
];

let promotionImg = document.querySelectorAll(".promotion__img");

for (let i = 0; i < promotionImg.length; i++) {
  promotionImg[
    i
  ].style.backgroundImage = `url(./assets/images/promotion/${promotionImgList[i]}.png)`;
}
