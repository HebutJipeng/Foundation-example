$(".scroll-fixed").click(function () {
	$('body,html').animate({ scrollTop: 0 }, 500);
	return false;
});

var _flag = false;
$(window).scroll(function() {
	var _height = $(this).scrollTop();
	if (_height >= 500) {
		$(".scroll-fixed").fadeIn();
	} else {
		$(".scroll-fixed").fadeOut();
	}
	var $top = $(".top-bar")
	if (_height >=500) {
		if (!_flag) {
			$top.addClass("fixed");
			$top.height(0).animate({height: "66px"}, 500);
			_flag = true;
		}
	} else {
		_flag = false;
		$top.removeClass("fixed")
	}



})