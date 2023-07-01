jQuery(document).ready(function ($) {
  // go to top button
  $("#topBtn").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $("#topBtn").show().fadeIn();
    } else {
      $("#topBtn").fadeOut().hide();
    }
  });

  $("#topBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 360);
    return false;
  });

  // chatbot close button
  $("#chatbotClose").click(function () {
    $("#chatbot, #chatbotClose").toggle();
  });
});
