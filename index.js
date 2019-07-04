var timer = setTimeout(function(){
	$('.warpper').removeClass('init');
},200)
$('.item').click(function	(){
	$(this).addClass('active');
	$('.warpper').addClass('warpper-active');
}	)
$(".close").click(	function	(e){
	e.stopPropagation();
	$('.warpper').removeClass('warpper-active');
	$('.item').removeClass('active');
})
