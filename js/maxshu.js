// JavaScript Document
$(function(){
	
	 /* $(".fan_moon").addClass("animated zoomInUp").show();*/
	

		$(".fan_name").addClass("animated fadeInLeftBig").show();

		setTimeout(function(){
		$(".fan_people").addClass("animated tada").show();
		
		},1000);

		
		setTimeout(function(){
		$(".fan_gg_logo").addClass("animated bounceInRight").show();
		
		},100);
		
		
		setTimeout(function(){
		$(".section1_main").addClass("animated bounceInUpUp").show();
		
		},1000);
		
		
		
		
		setTimeout(function(){
		$(".fan_Tables").addClass("animated bounceInRight").show();
		},1800);
		
		setTimeout(function(){
		$(".fan_gb").addClass("animated rubberBand").show();
		},2200);
		
		
		setTimeout(function(){
		$(".fan_gg_text").addClass("animated bounceInRight").show();
		
		},2600);
		
		setTimeout(function(){
		$(".fan_job").addClass("animated zoomInDown").show();
		},3000);
		
		
		setTimeout(function(){
		$(".fan_want2").addClass("animated bounceInRight").show();
		
		},3400);
		
		setTimeout(function(){
		$(".fan_free").addClass("animated zoomInDown").show();
		},3800);
		
		setTimeout(function(){
		$(".fan_text").addClass("animated bounceInRight").show();
		},4200);
		

		/*setTimeout(function(){
		$(".fan_Tables").addClass("animated rubberBand").show();
		},3500);*/
		
		
		/*点击换图*/
		
		/*$(".fan_people ").hover(function(){
			$(".fan_people ").addClass("fan_people2 ");
			});*/
		$(".fan_people ").mouseleave(function(){
			
			$(".fan_people ").removeClass("fan_people2");
			
			});
		$(".fan_netMod ").hover(function(){
			$(".fan_netMod ").addClass("fan_netMod2 ");
			});
		$(".fan_netMod ").mouseleave(function(){
			
			$(".fan_netMod ").removeClass("fan_netMod2");
			
			});
		$(".fan_shareMod ").hover(function(){
			$(".fan_shareMod ").addClass("fan_shareMod2 ");
			});
		$(".fan_shareMod ").mouseleave(function(){
			
			$(".fan_shareMod ").removeClass("fan_shareMod2");
			
			});
	})