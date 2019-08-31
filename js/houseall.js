$(function(){

	$('.house-lis1 li').click(function(){
		$(this).addClass('house-cur').siblings('').removeClass('house-cur');
		$(this).children('p').addClass('pcurrent').parent().siblings('').children('p').removeClass('pcurrent');
		
		var n=$(this).index();
		$('.house-lis2 li').eq(n).show().siblings('').hide();;
	})

	$('.imgs-title li').click(function(event) {
		$(this).addClass('house-cur1').siblings('').removeClass('house-cur1');
		
		var num=$(this).index();
		$('.imgs-lis li').eq(num).show().siblings('').hide();
	});

})