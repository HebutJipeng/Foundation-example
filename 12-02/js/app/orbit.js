$(window).resize(function() {
	var _height;
	$(".orbit-slide").find("img").each(function() {
		if ($(this).height()) {
			 _height = $(this).height()
			 return
		}
	})
	$(".orbit").find(".orbit-container").height(_height)
})