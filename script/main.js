$(document).ready(function(){

	var prl1 = 0;
	function burgerActivate(py){
		if(py>0)
			$(".header").addClass("active")
		else 
			$(".header").removeClass("active")
	};
	burgerActivate(window.pageYOffset);
	$(window).scroll(function(){
		let py = window.pageYOffset;
		burgerActivate(py)

		prl1 = Math.round(window.pageYOffset/3);
		if(py<$(".page").innerHeight())
			$(".page__bg").css("top",prl1+"px")
	});

	$(".burger").on("click",function(){
		$(".burger,.header__item_nav").toggleClass("active");
		$("body").toggleClass("lock")
	});

	$(".pets__row").slick({
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 910,
				settings: {
					slidesToShow: 2,
					arrows:false,
					dots: true,
				}
			},{
				breakpoint: 540,
				settings: {
					dots: true,
					slidesToShow: 1,
					arrows:false
				}
			}
		]
	});

	var card_num=$(".donation__bank-number").text();
	window.addEventListener("resize",function(){
		let ww = window.innerWidth;
		if(ww<=425){
			$(".donation__bank-number").text("Donate Now");
		};
	});
});