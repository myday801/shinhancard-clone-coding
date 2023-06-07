$(document).ready(function () {
  // 마이카 button
  $("#mycarButton, .dropdown__close-button").click(function () {
    $(".dropdown__menu").toggle();
  });

  // Gnb dropdown menu
  // $(".navbar-menu__item").hover(
  //   function () {
  //     $(this).find(".menu__depth2").stop().slideDown(200);
  //   },
  //   function () {
  //     $(this).find(".menu__depth2").stop().slideUp(200);
  //   }
  // );

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
  // 초기 설정: 첫 번째 탭 활성화
  $(".recommend-card--tabs__link").first().addClass("test4");
  $("recommend-card--tabs__content").hide().first().show();

  // 탭 버튼 클릭 이벤트 처리
  $(".recommend-card--tabs__link").click(function () {
    // 선택된 탭 버튼 활성화
    $(".recommend-card--tabs__link").removeClass("test4");
    $(this).addClass("test4");

    // 선택된 탭 내용 표시
    var tabId = $(this).data("tab");
    $("recommend-card--tabs__content").hide();
    $("#" + tabId).show();
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
