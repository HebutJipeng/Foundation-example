//保持 页面图片等比例；
$(function() {
	$(window).resize(function() {
		$(".card-img").each(function(){
			var w = $(this).width();
			var img_w = 364;
			var img_h = 243;
			var height = (w*img_h)/img_w; 
			$(this).css({"height":height}); 
		}); 
	})
	
})