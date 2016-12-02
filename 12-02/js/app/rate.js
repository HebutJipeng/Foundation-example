function feelRate(data) {
    var rateVal = data,
        _max = rateVal[0],
        _height = [],
        max_height = 90

    for (x of rateVal) {
        if (x > _max) {
            _max = x
        }
    }

    for (x in rateVal) {
        _height[x] = rateVal[x] / _max * 90
    }

    $(".feel-rate").each(function(index) {
        $(this).attr("orgheight", _height[index]).height(_height[index]).find(".feel-count").html(rateVal[index]);
    })
}

$(".feel-post").click("click", function() {
	_content = '<p class="add-one animated">+1</p>'
	$(this).addClass("add-clicked").prev().append(_content)

	var num = $(".add-one")

	num.addClass("fadeInUp")
	setTimeout(function(){
		num.removeClass("fadeInUp").addClass("fadeOutUp")
		setTimeout(function() {
			num.removeClass("fadeOutUp").remove();
		}, 500)
	}, 500)
})