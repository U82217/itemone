$(function() {

	/*banner轮播左右按钮*/
	$('.next-btn').hover(function() {
		$(this).css('background-position','-234px -123px');
	}, function() {
		$(this).css('background-position','');
	});
	$('.back-btn').hover(function() {
		$(this).css('background-position','-170px -123px');
	}, function() {
		$(this).css('background-position','');
	});

	// 右按钮点击事件
	$('.next-btn').click(function(event) {
		num++;
		if (num==5) {
			$('.dot li').eq(0).addClass('current').siblings('').removeClass('current');
		}
		if (num>5) {
			$('.banner-lis1').css('left', '0px');
			num=1;
		}
		$('.banner-lis1').animate({'left':-num*1200+'px'},500);
		$('.dot li').eq(num).addClass('current').siblings('').removeClass('current');
	});

	// 左按钮点击事件
	$('.back-btn').click(function(event) {
		num--;
		if (num==0) {
			$('.dot li').eq(5).addClass('current').siblings('').removeClass('current');
		}
		if (num<0) {
			num=5;
			$('.banner-lis1').css('left', -num*1200+'px');
			num=4;
		}
		$('.banner-lis1').animate({'left':-num*1200+'px'},500);
		$('.dot li').eq(num).addClass('current').siblings('').removeClass('current');
	});

	

	$('.banner').hover(function() {
		clearInterval(timer);
		$('.banner .btn').show();
	}, function() {
		$('.banner .btn').hide();
		lunbo();
	});

	var num=0;
	var timer;

	function lunbo(){
		clearInterval(timer);
		timer=setInterval(function(){
			num++;
			if (num==5) {
				$('.dot li').eq(0).addClass('current').siblings('').removeClass('current');
			}
			if (num>5) {
				$('.banner-lis1').css('left', '0px');
				num=1;
			}
			$('.banner-lis1').animate({'left':-num*1200+'px'},500);
			$('.dot li').eq(num).addClass('current').siblings('').removeClass('current');
		},2000)
	}
	lunbo();

	/*小圆点*/
	$('.dot li').hover(function() {
		num=$(this).index();
		$(this).addClass('current');	
		$('.banner-lis1').stop().animate({'left':-num*1200+'px'},500);
	}, function() {
		$(this).removeClass('current');
	});

	/*banner中的侧导航*/
	$('.banner-lis2 li').hover(function(e) {
		e.stopPropagation();
		$(this).children('div').show();
	}, function() {
		$(this).children('div').hide();
	});

	/*banner下面的ul图片*/
	$('.relative .pic').hover(function() {
		$(this).css('transform', 'translateY(-5px)');
	}, function() {
		$(this).css('transform', '');			
	});

})
