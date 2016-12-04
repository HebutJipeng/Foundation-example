$(".scroll-fixed").click(function () {
	$('body,html').animate({ scrollTop: 0 }, 500);
	return false;
});
$(window).scroll(function() {
	var _height = $(this).scrollTop();
	if (_height >= 500) {
		$(".scroll-fixed").fadeIn();
	} else {
		$(".scroll-fixed").fadeOut();
	}
	var $top = $(".top-bar")
	if (_height >=500) {
		$top.addClass("fixed");
		$top.animate({height: "66px"}, 500);
	} else {
		$top.removeClass("fixed")
	}



})