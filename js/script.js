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
  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 4,
    slidesPerGroup: 8,
    grid: {
      rows: 2,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 8,
        grid: {
          rows: 2,
        },
      },
      1024: {
        slidesPerView: 8,
        slidesPerGroup: 8,
        grid: {
          rows: 1,
        },
      },
    },
  });

  var swiper3 = new Swiper(".js-my-swiper", {
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
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

// 이름 넣을 배열
let imgList = [
  "icon-150-type2-1.png",
  "icon-150-type2-2.png",
  "icon-150-type2-3.png",
  "icon-150-type2-4.png",
  "icon-150-type2-5.png",
  "icon-150-type2-6.png",
  "icon-150-type2-7.png",
  "icon-150-type2-8.png",
  "icon-150-type2-9.png",
  "icon-150-type2-10.png",
  "icon-150-type2-11.png",
  "icon-150-type2-12.png",
  "icon-150-type2-13.png",
  "icon-150-type2-14.png",
  "icon-150-type2-15.png",
  "icon-150-type2-16.png",
];

let imgLi = document.querySelectorAll(".main-quickmenu__lists li");

for (let i = 0; i < imgLi.length; i++) {
  imgLi[i].querySelector("img").src = "../../assets/images/" + imgList[i];
}
