window.onload=function(){
	//头部导航
	var lis=document.getElementsByClassName('header-item');
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].style.color='';
			}
			this.style.color="#fff";
		}
	}
}
/*头部搜索栏*/
$(function(){
	$('.li-item1').mouseenter(function(event) {
		$('.search-input').animate({'width': '250px'},500);
	});

	$('.li-item').hover(function() {
		$(this).children('div').show();
	}, function() {
		$(this).children('div').hide();
	});


/*固定侧导航栏*/
	$('.a-nav1').hover(function() {
		$('.aside-icon1').css({
			'background-position':'0px -38px',
			animation: 'paused'
		});	
	}, function() {
		$('.aside-icon1').css({
			'background-position':'',
			animation: ''
		});	
	});
	
	$('.a-nav2').hover(function() {
		$('.aside-icon2').css('background-position','-40px -38px');
	}, function() {
		$('.aside-icon2').css('background-position','');
	});

	$('.a-nav3').hover(function() {
		$('.wx-img').show();
	}, function() {
		$('.wx-img').hide();
	});

	$('.a-nav4').hover(function() {
		$('.aside-icon4').css('background-position','-76px -38px');
	}, function() {
		$('.aside-icon4').css('background-position','');
	});

	/*返回顶部*/
	$('.a-nav4').click(function() {
		$('html,body').animate({scrollTop: 0}, 300);	
	});
})