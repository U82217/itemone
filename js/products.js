$(function(){

	/*鼠标点击产品分类*/
	$('.t-ul li').click(function(event) {
		$(this).children('a,span').addClass('current').parent().siblings('').children('a,span').removeClass('current');
		$(this).children('span').children('i').css('background-position','-242px -100px').parent().parent().siblings('').children('span').children('i').css('background-position','-262px -100px');
	});

	/*展开更多选项*/
	$('.li-more1').click(function(e) {
		$('.more').show();
		$('.product-title').css("margin-bottom","144px");
	});

	$('.li-more2').click(function(e) {
		e.stopPropagation();
		$(this).parent().parent().hide();
		$('.product-title').css("margin-bottom","");
	});

	/*价格*/
	$('.price').hover(function() {
		$('.price-lis').show();
	}, function() {
		$('.price-lis').hide();
	});

	$('.area-lis1 li').click(function(event) {
		$(this).children('span').toggleClass('current');
		$(this).children('span').children('i').toggleClass('check-box3');
	})

	/*点击对比*/
	$('.compare').click(function(event) {
		$(this).children('i').toggleClass('compare-icon1');
	      $('.compare-nav').slideToggle(500);
	})

	$('.nav-hide').click(function(event) {
		$('.compare-lis').slideToggle();
		if ($(this).html()=="隐藏") {
			$(this).html('显示');
		}else{
			$(this).html('隐藏');
		}
	});
})