$(document).on("scroll", function() {
  var pixels = $(document).scrollTop();

  $(".box1").css("top", pixels * -0.6);
  $(".box2").css("top", pixels * -0.4);
  $(".box3").css("top", pixels * -0.2 - 200);

});
