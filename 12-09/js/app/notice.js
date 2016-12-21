function alertMsg(msg) {
	var _msg = "<div class='alertMsg'>" + msg + "</div>";
	$("body").append(_msg);
	$(".alertMsg").show();
	setTimeout(function() {
		$(".alertMsg").fadeOut();
	}, 2000)
}