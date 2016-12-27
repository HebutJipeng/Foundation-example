function alertMsg(msg, callback) {
	var _msg = "<div class='alertMsg'>" + msg + "</div>";
	$("body").append(_msg);
	$(".alertMsg").show();
	setTimeout(function() {
		$(".alertMsg").fadeOut('normal', function() {
			$(this).remove();
			if (callback) {
				if (typeof callback == 'function') {
					callback()
				}
			}
		});
	}, 2000)
}