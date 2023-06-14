$(document).ready(function () {
  // 마이카 button
  $("#mycarButton, .dropdown__close-button").click(function () {
    $(".dropdown__menu").toggle();
  });

  // Gnb dropdown menu
  $(".navbar-menu__item").hover(
    function () {
      $(this).find(".menu-depth2__wrap").stop().slideDown(200);
      $(".gnb__dimmer").toggle();
    },
    function () {
      $(this).find(".menu-depth2__wrap").stop().slideUp(200);
      $(".gnb__dimmer").toggle();
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
    loop: true,
    navigation: {
      prevEl: ".swiper-button-prev.test",
      nextEl: ".swiper-button-next.test",
    },
    pagination: {
      el: ".quickmenu-swiper__pagination",
      clickable: true,
    },
  });

  // all-menu toggle
  $("#allMenuButton, .all-menu__close").click(function () {
    $("#allMenuWrap").toggle();
  });

  // Promotion swiper
  var swiper3 = new Swiper(".js-promotion-swiper", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: ".swiper-button-prev.test2",
      nextEl: ".swiper-button-next.test2",
    },
    pagination: {
      el: ".promotion-swiper__pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  // Promotion swiper play/stop control button
  $(".swiper-button-play").hide();
  $(".swiper-button-pause").click(function () {
    swiper3.autoplay.stop();
    $(this).toggle();
    $(".swiper-button-play").toggle();
  });
  $(".swiper-button-play").click(function () {
    swiper3.autoplay.start();
    $(this).toggle();
    $(".swiper-button-pause").toggle();
  });

  // Recommend card section tabmenu
  $(".recommend-tabs__link").click(function () {
    var tabId = $(this).attr("href");
    $(".recommend-tab__content").hide();
    $(tabId).show();
    $(".recommend-tabs__link").removeClass("tab-content-active");
    $(this).addClass("tab-content-active");
  });

  var imgArray = [
    "deepDreamPlatinumPlus.png",
    "deepOil.png",
    "mrLife.png",
    "prime.png",
    "spring.png",
    "kuromi.png",
    "creditFitChoigosim.png",
    "creditAir1.5.png",
    "subscribeLike.png",
    "bonvoy.png",
    "bonvoyTheClassic.png",
    "theAceBlueLabel.png",
    "bestPlus.png",
    "theClassicPlus.png",
    // 나머지 이미지 파일 경로
  ];

  $(".recommend-tab__content__img").each(function (index) {
    var imgPath = "./assets/images/card/" + imgArray[index];
    $(this).css("background-image", "url(" + imgPath + ")");
  });

  // Finance section button
  // 단기대출
  $("#financeShortLoan").click(function () {
    $(location).attr("href", "#");
  });
  // 장기대출
  $("#financeLongLoan").click(function () {
    $(location).attr("href", "#");
  });
  // 리볼빙
  $("#financeRevolving").click(function () {
    $(location).attr("href", "#");
  });
  // 즉시대출
  $("#financeLoan").click(function () {
    $(location).attr("href", "#");
  });

  // Recommend card section swiper
  // var swiper4 = new Swiper(".js-card-swiper", {
  //   slidesPerView: 5,
  //   loop: true,
  // });
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

// Finance background-image
let financeIconList = ["short_loan", "long_loan", "revolving", "loan"];

let financeIcon = document.querySelectorAll(".finance__item__img");

for (let i = 0; i < financeIcon.length; i++) {
  financeIcon[
    i
  ].style.backgroundImage = `url(./assets/images/icon/${financeIconList[i]}.png)`;
}
