$(document).ready(function(){
//Face平滑

	$(".faceBanner,.faceBannerThree").animate({left:'-343px'},2500,'linear',function(){
		if($(this).css("left") == '-343px'){
			$(this).css("left","343px");
			faceSlideOne();
		}

	});
	$(".faceBannerTwo,.faceBannerFour").animate({left:'-343px'},5000,'linear',function(){
		if($(this).css("left") == '-343px'){
			$(this).css("left","343px");
		}
		faceSlideTwo();
	});
	var timer2;
	function faceSlideOne(){
	    timer2 = setInterval(function(){
	    slideOne();
	  	},0);
	}
	var timer3;
	function faceSlideTwo(){
	    timer3 = setInterval(function(){
	    slideTwo();
	  	},0);
	}
	function slideOne(){
		$(".faceBanner,.faceBannerThree").animate({left:'-343px'},5000,'linear',function(){
			if($(this).css("left") == '-343px'){
			$(this).css("left","343px");
			}
		});
	}
	function slideTwo(){
		$(".faceBannerTwo,.faceBannerFour").animate({left:'-343px'},5000,'linear',function(){
			if($(this).css("left") == '-343px'){
			$(this).css("left","343px");
			}
		});
	}
	function slideChange(){
		if($(".faceBanner,.faceBannerThree").css("left") == '-343px'){
			$(".faceBanner,.faceBannerThree").css("left","343px");
		}
		if($(".faceBannerTwo,.faceBannerFour").css("left") == '-343px'){
			$(".faceBannerTwo,.faceBannerFour").css("left","343px");
		}
	}	
//Title
	showTime();
	var faceNum;
	function faceChange(){
		for(var i = 0;i<2;i++){
			if($(".title img").eq(i).css('display') == 'block'){
				faceNum = i;
			}
		}
		$(".title img").css('display','none');
		if(faceNum == 0){
			$(".title img").eq(1).css('display','block');
		}else{
			$(".title img").eq(0).css('display','block');
		}
		if($(".title").css('top') == '100px'){
			$(".title").css('top','90px');
		}else{
			$(".title").css('top','100px');
		}
	}
	var timer;
	function showTime(){
	    timer = setInterval(function(){
	    faceChange();
	    // slide();
	  	},200);
	}
//start


	$('.start').click(function(){
		$('.face').css('display','none');
		$('.play,.bannerSecond').css('display','block');

	//playUp
		var strUpT = '';
		var strUpO = '';
		var strUpT2 = '';
		var strUpO2 = '';
		var ramNum = 70*(Math.random());
		var ramNum2 = 70*(Math.random());
		var ramNumDown = 70 - ramNum;
		var ramNumDown2 = 70 - ramNum2;
		for(var i = 0;i<ramNum;i++){
			strUpO += '<img src="img/up_mod.png">';
		}
		strUpO += '<img src="img/up_pipe.png">';
		$(".playUpSlide").html(strUpO);
		strUpT += '<img src="img/down_pipe.png">';
		for(var i = 0;i<ramNumDown;i++){
			strUpT += '<img src="img/down_mod.png">';
		}
		$(".playDownSlide").html(strUpT);

		for(var i = 0;i<ramNum2;i++){
			strUpO2 += '<img src="img/up_mod.png">';
		}
		strUpO2 += '<img src="img/up_pipe.png">';
		$(".playUpSlideTwo").html(strUpO2);
		strUpT2 += '<img src="img/down_pipe.png">';
		for(var i = 0;i<ramNumDown2;i++){
			strUpT2 += '<img src="img/down_mod.png">';
		}
		$(".playDownSlideTwo").html(strUpT2);
	//开始

		var num = 0;//计数
		var ramNumFirst = 70*(Math.random());
		$('.wordStart').css('display','block');
		$(".playUpSlide").animate({left:'343px'},2500,'linear',function(){
			// $('.count span').text(++num);
			$(".playUpSlide").animate({left:'281px'},452,'linear',function(){
				if($(this).css("left") == '281px'){
					$(this).css("left","686px");
				}
				var strUp = '';
				// var ramNumFirst = 10*(Math.random());
				for(var i = 0;i<ramNumFirst;i++){
					strUp += '<img src="img/up_mod.png">';
				}
				strUp += '<img src="img/up_pipe.png">';
				$(".playUpSlide").html(strUp);
			});
			$(".playUpSlideTwo").animate({left:'343px'},2500,'linear',function(){
				$('.wordStart').css('display','none');
				ready();
				forever();
			});
		});
		$(".playDownSlide").animate({left:'343px'},2500,'linear',function(){
			$(".playDownSlide").animate({left:'281px'},452,'linear',function(){
				if($(this).css("left") == '281px'){
					$(this).css("left","686px");
				}
				var strDown = '';
				strDown += '<img src="img/down_pipe.png">';
				for(var i = 0;i<70 - ramNumFirst;i++){
					strDown += '<img src="img/down_mod.png">';
				}
				
				$(".playDownSlide").html(strDown);
			});
			$(".playDownSlideTwo").animate({left:'343px'},2500,'linear');
		});
		function forPlay(){
			var ramNum = 70*(Math.random());
			var ramNumTwo = 70*(Math.random());
			$(".playUpSlideTwo").animate({left:'281px'},452,'linear',function(){
					//$(".playUpSlideTwo").stop().animate();
				if($(this).css("left") == '281px'){
					$(this).css("left","686px");
				}
				var strUp = '';
				for(var i = 0;i<ramNum;i++){
					strUp += '<img src="img/up_mod.png">';
				}
				strUp += '<img src="img/up_pipe.png">';
				$(".playUpSlideTwo").html(strUp);
			}).stop(false,true);
			// .stop(false,true);
			$(".playDownSlideTwo").animate({left:'281px'},452,'linear',function(){
				//$(".playDownSlideTwo").stop().animate();
				if($(this).css("left") == '281px'){
					$(this).css("left","686px");	
				}
				var strDown = '';
				strDown = '<img src="img/down_pipe.png">';
				for(var i = 0;i<70 - ramNum;i++){
					strDown += '<img src="img/down_mod.png">';
				}
				$(".playDownSlideTwo").html(strDown);
			}).stop(false,true);
			// .stop(false,true);
			$(".playUpSlide").animate({left:'343px'},2500,'linear',function(){
				$('.count span').text(++num);
				$(".playUpSlide").animate({left:'281px'},452,'linear',function(){
					if($(this).css("left") == '281px'){
						$(this).css("left","686px");
					}
					var strUp = '';
					for(var i = 0;i<ramNumTwo;i++){
						strUp += '<img src="img/up_mod.png">';
					}
					strUp += '<img src="img/up_pipe.png">';
					$(".playUpSlide").html(strUp);
				}).stop(false,true);
				$(".playUpSlideTwo").animate({left:'343px'},2500,'linear',function(){
					$('.count span').text(++num);
				});			
			});
			$(".playDownSlide").animate({left:'343px'},2500,'linear',function(){
				$(".playDownSlide").animate({left:'281px'},452,'linear',function(){
						if($(this).css("left") == '281px'){
						$(this).css("left","686px");
					}
					var strDown = '';
					strDown += '<img src="img/down_pipe.png">';
					for(var i = 0;i<70 - ramNumTwo;i++){
						strDown += '<img src="img/down_mod.png">';
					}
				    $(".playDownSlide").html(strDown);
				}).stop(false,true);
				$(".playDownSlideTwo").animate({left:'343px'},2500,'linear');
					
			});
			// clearInterval(timer4);
		}
		var timer4;
		function forever(){
	    	timer4 = setInterval(function(){
			forPlay();
	  		},5000);
		}
	//ready 
		function ready(){
			$('.word').css('display','block');
			var timer5;
			var readyNum = 4;
			function forever(){
		    	timer5 = setInterval(function(){
		    	readyNum = readyNum - 1;
		    	if(readyNum == -1){
					// clearInterval(timer5);
					$('.word').css('display','none');
				}
		    	$('.word').text(readyNum);
		  		},1000);
			}
			forever();
			if(readyNum == 0){
				windows.clearInterval(timer5);
				$('.word').css('display','none');
			}
		}
	//飞鸟
		$('.flyBird').eq(2).css('display','block');
		$('.Fly').animate({top:'400px'},1000,'linear');
		$('.content').click(function(){
			$('.Fly').stop();
			$('.flyBird').eq(2).css('display','none');
			$('.flyBird').eq(1).css('display','block');
			$('.Fly').animate({top:'-=30px'},200,function(){		
				// var i = (400 - $(this).offset().top)*12.5;
				$('.flyBird').eq(1).css('display','none');
				$('.flyBird').eq(2).css('display','block');
				$('.Fly').animate({top:'400px'},1000,'linear');
			});
			if(parseInt($('.playUpSlide,.playDownSlide').css('left')) <= 440
			&&parseInt($('.playUpSlide,.playDownSlide').css('left')) >= 338){
				var height = new Array;
				height[0] = $('.playUpSlide').height();
				height[1] = 423 - $('.playDownSlide').height();
				if(parseInt($('.Fly').css('top')) <= height[0]||parseInt($('.Fly').css('top')) >= height[1] ){
					$('.Fly').animate({top:'400px'},10,'linear');
				}
			}
			if(parseInt($('.playUpSlideTwo,.playDownSlideTwo').css('left')) <= 440
			&&parseInt($('.playUpSlideTwo,.playDownSlideTwo').css('left')) >= 338){
				// $('.count span').text(num);
				var height = new Array;
				height[0] = $('.playUpSlideTwo').height();
				height[1] = 423 - $('.playDownSlideTwo').height();
				// console.log(height[0]);
				// console.log(height[1]);
				if(parseInt($('.Fly').css('top')) <= height[0]||parseInt($('.Fly').css('top')) >= height[1] ){
					// $('.Fly').stop();
					$('.Fly').animate({top:'400px'},10,'linear');

				}
			}
			if($('.Fly').css('top') == '400px'){
				$(".faceBannerThree,.faceBannerFour").css('display','none');
				$(".playDownSlideTwo,.playDownSlide,.playUpSlideTwo,.playUpSlide").stop(true);
				$('.content').unbind('click');
				$('.mes').css('display','block');
				$('#ok').css('display','block');
				$('#ok').click(function(){
					window.location.reload();
				});
			}
		});
	});
});	