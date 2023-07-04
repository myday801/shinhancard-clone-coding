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
  $("#allMenuBtn, #allMenuClose").click(function () {
    $("#allMenuWrap").toggle();
  });

  const allMenuNav = $(".allmenu__nav-item");

  allMenuNav.first().addClass("active");

  allMenuNav.click(function (event) {
    event.preventDefault();
    const targetId = $(this).find("a").attr("href");
    const targetSection = $(targetId);

    // 스크롤 이동
    // $("html, body").animate(
    //   {
    //     scrollTop: targetSection.offset().top,
    //   },
    //   800
    // );

    // allmenu__nav-item 클릭 시 active
    allMenuNav.removeClass("active");
    $(this).addClass("active");

    if (targetSection.length > 0) {
      // 스크롤 이동
      const targetOffset = targetSection.offset().top;
      $("html, body").animate({ scrollTop: targetOffset }, 800);
    }
  });

  // allMenuNav.click(function () {
  //   const targetId = $(this).find("a").attr("href");
  //   $(targetId)[0].scrollIntoView();
  // });

  // 전체메뉴 nav swiper

  var swiper5 = new Swiper(".js-swiper-allMenuNav", {
    slidesPerView: "auto",
    navigation: {
      prevEl: ".swiper-button-prev2",
      nextEl: ".swiper-button-next2",
    },
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

  $(".recommend-tabs__link").click(function (e) {
    e.preventDefault();
    var tabId = $(this).attr("href");
    $(".recommend-tab__content").hide();
    $(tabId).show();
    $(".recommend__tabs__item--active").removeClass(
      "recommend__tabs__item--active"
    );
    $(this).parent().addClass("recommend__tabs__item--active");
  });
  $(".recommend-tabs__item").first().addClass("recommend__tabs__item--active");

  $(".recommend-tabs__link").first().click();

  var imgArray = [
    "deepDreamPlatinumPlus.png",
    "deepOil.png",
    "mrLife.png",
    "prime.png",
    "wayCheckChoigosim.png",
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
  ];

  $(".recommend-tab__content-img").each(function (index) {
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

  //Recommend card section swiper
  var swiper4 = new Swiper(".js-card-swiper", {
    slidesPerView: 5,
    loop: true,
  });

  // footer bottom selec button toggle arrow
  $("#toggleBtn").on("click", function () {
    $(this).find(".footer-bottom__button-arrow").toggleClass("toggle-active");
    $(this).toggleClass("toggle-active");
    $(this).siblings(".footer-bottom__group__list").toggle();
  });

  $("#toggleBtn2").on("click", function () {
    $(this).find(".footer-bottom__button-arrow").toggleClass("toggle-active");
    $(this).toggleClass("toggle-active");
    $(this).siblings(".footer-bottom__group__list").toggle();
  });

  $("#footerExpandBtn").on("click", function () {
    $(this).toggleClass("active");
    $("#footerExpandCont").toggle();
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

// Finance background-image
let financeIconList = ["short_loan", "long_loan", "revolving", "loan"];

let financeIcon = document.querySelectorAll(".finance__item__img");

for (let i = 0; i < financeIcon.length; i++) {
  financeIcon[
    i
  ].style.backgroundImage = `url(./assets/images/icon/${financeIconList[i]}.png)`;
}

// footer sns-icon background-image
let snsIconList = ["sns07", "sns02", "sns05", "sns03", "sns04"];

let snsIcon = document.querySelectorAll(".footer-bottom__link");

for (let i = 0; i < snsIcon.length; i++) {
  snsIcon[
    i
  ].style.backgroundImage = `url(./assets/images/sns/${snsIconList[i]}.png)`;
}
