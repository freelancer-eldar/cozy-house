$(document).ready(function(){

	var prl1 = 0;
	function burgerActivate(py){
		if(py>0)
			$(".header").addClass("active")
		else 
			$(".header").removeClass("active")
	};
	burgerActivate(window.innerHeight);
	$(window).scroll(function(){
		let = py = window.pageYOffset;
		burgerActivate(py)

		prl1 = Math.round(window.pageYOffset/3);
		$(".page__bg").css("top",prl1+"px")
	});

	$(".burger").on("click",function(){
		$(".burger,.header__item_nav").toggleClass("active");
		setTimeout(function(){
			$("body").toggleClass("lock")
		},300);
	});

	$(".pets__row").slick({
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 1500,
		// pauseOnHover: false,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 910,
				settings: {
					slidesToShow: 2,
					arrows:false,
					dots: true,
					draggable: true,
				}
			},{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					arrows:false
				}
			}
		]
	});
});
//infinite: true,
// slidesToShow: 3,
// slidesToScroll: 1,
// speed: 800,
// easing: "ease",
// // infinite: false,
// // autoplay: true,
// // autoplaySpeed: 2000,
// lazyLoad: 'ondemand',
// // draggable: false,
// pauseOnHover: false,
// variableWidth: true,
// responsive: [
// 	{
// 		breakpoint: 1260,
// 		settings: {
// 			slidesToShow: 2,
// 			arrows:false,
// 			dots: true,
// 			draggable: true,
// 		}
// 	},{
// 		breakpoint: 710,
// 		settings: {
// 			slidesToShow: 1,
// 			centerMode:true,
// 			arrows:false,
// 			dots: true,
// 			draggable: true
// 		}
// 	}
// ]
// // appendArrows:$(".content02_buttons")