$(function() {

	$('.det-lis1 li').mouseover(function() {
		// 获取列表图片的src,然后修改左右盒子中的图片
		var nows=$(this).children('a').children('img').attr('src');
		$('.lbox img').attr('src',nows);
		$('.rbox img').attr('src',nows);
		$(this).addClass('det-cur').siblings('').removeClass('det-cur');
	})

	/*放大图片*/
	$('.lbox').hover(function() {
		$('.detail-pic').show();
		$('.rbox').show();
	}, function() {
		$('.detail-pic').hide();
		$('.rbox').hide();
	});
	// 鼠标移动事件
	$('.lbox').mousemove(function(e) {	
		// 获取鼠标坐标
		var x=e.clientX-$(this).offset().left-$('.detail-pic').width()/2;
		var y=e.clientY-$(this).offset().top-$('.detail-pic').height()/2;
		
		// 声明了一个最大宽、高度，用于限制小盒子的移动范围
		var maxx=$('.lbox').width()-$('.detail-pic').width();
		var maxy=$('.lbox').height()-$('.detail-pic').height();
		
	        if (x<0) x=0;
			if (y<0) y=0;
			if (x>maxx) x=maxx;
			if (y>maxy) y=maxy;
	        $('.detail-pic').css({left:x,top:y});
	        $('.rimg').css({top:-y*2,left:-x*2});    

	});

	/*鼠标滚动*/
	$(window).scroll(function(event) {
		var h=$(window).scrollTop();
		if (h>=1254) {
			$('.intro').addClass('fixdenav');
			$('.intro-left,.intro-right').show();
		}else {
			$('.intro').removeClass('fixdenav');
			$('.intro-left,.intro-right').hide();
		}
	});

	/*中间导航条点击事件*/
	$('.intro-lis li').click(function(e) {
		$(this).children('a').addClass('intro-cur').parent().siblings('').children('a').removeClass('intro-cur');
		var n=$(this).index();
		$('.intro-box>div').eq(n).show().siblings().hide();
		return false;
	});

	/*评价区的点击事件*/
	$('.support').click(function(e) {
		$(this).toggleClass('support-cur');
		$(this).children('i').toggleClass('support-current');
	});
})