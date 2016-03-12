
	
	jQuery(document).ready(function($) {
	
		  jQuery("#default" ).click(function(){
			  jQuery("#color" ).attr("href", "css/default-color.css");
			  jQuery(".navbar-brand img" ).attr("src", "images/logo.png");
			  jQuery(".navbar-brand.logo-light img" ).attr("src", "images/logo-light-pink.png");
			  jQuery(".navbar-brand.with-bg img, .navbar-brand.simple img" ).attr("src", "images/logo-fallback-white.png");
			  return false;
		  });
		  
		  jQuery("#blue" ).click(function(){
			  jQuery("#color" ).attr("href", "css/blue-color.css");
			  jQuery(".navbar-brand img" ).attr("src", "images/logo-dark-blue.png");
			  jQuery(".navbar-brand.logo-light img" ).attr("src", "images/logo-light-blue.png");
			  jQuery(".navbar-brand.with-bg img, .navbar-brand.simple img" ).attr("src", "images/logo-fallback-white.png");
			  return false;
		  });
		  
		  jQuery("#grey" ).click(function(){
			  jQuery("#color" ).attr("href", "css/grey-color.css");
			  jQuery(".navbar-brand img" ).attr("src", "images/logo-dark-grey.png");
			  jQuery(".navbar-brand.logo-light img" ).attr("src", "images/logo-light-grey.png");
			  jQuery(".navbar-brand.with-bg img, .navbar-brand.simple img" ).attr("src", "images/logo-fallback-white.png");
			  return false;
		  });
		  
		  
		  jQuery("#pink" ).click(function(){
			  jQuery("#color" ).attr("href", "css/pink-color.css");
			  jQuery(".navbar-brand img" ).attr("src", "images/logo-dark-pink.png");
			  jQuery(".navbar-brand.logo-light img" ).attr("src", "images/logo-light-pink.png");
			  jQuery(".navbar-brand.with-bg img, .navbar-brand.simple img" ).attr("src", "images/logo-fallback-white.png");
			  return false;
		  });
		  
		  jQuery("#green" ).click(function(){
			  jQuery("#color" ).attr("href", "css/green-color.css");
			  jQuery(".navbar-brand img" ).attr("src", "images/logo-dark-green.png");
			  jQuery(".navbar-brand.logo-light img" ).attr("src", "images/logo-light-green.png");
			  jQuery(".navbar-brand.with-bg img, .navbar-brand.simple img" ).attr("src", "images/logo-fallback-white.png");
			  return false;
		  });
		  jQuery("#yellow" ).click(function(){
			  jQuery("#color" ).attr("href", "css/yellow-color.css");
			  jQuery(".navbar-brand img" ).attr("src", "images/logo-dark-yellow.png");
			  jQuery(".navbar-brand.logo-light img" ).attr("src", "images/logo-light-yellow.png");
			  jQuery(".navbar-brand.with-bg img, .navbar-brand.simple img" ).attr("src", "images/logo-fallback-white.png");
			  return false;
		  });
		  jQuery("#light-blue" ).click(function(){
			  jQuery("#color" ).attr("href", "css/light-blue-color.css");
			  jQuery(".navbar-brand img" ).attr("src", "images/logo-dark-light-blue.png");
			  jQuery(".navbar-brand.logo-light img" ).attr("src", "images/logo-light-lig-blue.png");
			  jQuery(".navbar-brand.with-bg img, .navbar-brand.simple img" ).attr("src", "images/logo-fallback-white.png");
			  return false;
		  });
		  
		
		   
		  jQuery(".switcher-dropdown a span").click(function(){
			  	//jQuery(".switcher-dropdown ul").slideUp();
				jQuery(this).parent().parent(".switcher-dropdown").find("ul").slideToggle();
				jQuery(this).parent().parent(".switcher-dropdown").siblings(".switcher-dropdown").find("ul").slideUp();
				
		  });
		  
		  
		  
		  //heading styles
		  jQuery(".switcher-dropdown li a#heading1").click(function(){
			  	jQuery(".heading").removeClass("iconic");
				jQuery(".heading").removeClass("heading-boxed");
		   });
		   jQuery(".switcher-dropdown li a#heading2").click(function(){
			  	jQuery(".heading").addClass("iconic");
				jQuery(".heading").removeClass("heading-boxed");
		   });
		   jQuery(".switcher-dropdown li a#heading3").click(function(){
		   jQuery(".heading").removeClass("iconic");
			  	jQuery(".heading").addClass("heading-boxed");
		   });
		  
		  
		  //menu 
		  jQuery("#menu-light").click(function(){
			  	jQuery(".navbar-default").removeClass("dark");
				jQuery(".navbar-brand").removeClass("logo-light");
				jQuery(".navbar-brand img" ).attr("src", "images/logo-fallback.png");
				jQuery(".navbar-brand.with-bg img, .navbar-brand.simple img" ).attr("src", "images/logo-fallback-white.png");
				jQuery(".navbar-brand.colorfull img" ).attr("src", "images/logo-colourfull.png");
		   });
		   jQuery("#menu-dark").click(function(){
			  	jQuery(".navbar-default").addClass("dark");
				jQuery(".navbar-brand").addClass("logo-light");
				jQuery(".navbar-brand img" ).attr("src", "images/logo-fallback-white.png");
				jQuery(".navbar-brand.colorfull img" ).attr("src", "images/logo-colourfull.png");
		   });
		  
		  //theme 
		  jQuery("#theme-light").click(function(){
			  	jQuery("#theme-css" ).attr("href", "");
				jQuery(".navbar-default").removeClass("dark");
				jQuery(".navbar-brand").removeClass("logo-light");
				jQuery(".navbar-brand img" ).attr("src", "images/logo-fallback.png");
				jQuery(".navbar-brand.with-bg img, .navbar-brand.simple img" ).attr("src", "images/logo-fallback-white.png");
				jQuery(".navbar-brand.colorfull img" ).attr("src", "images/logo-colourfull.png");
		   });
		   jQuery("#theme-dark").click(function(){
			  	jQuery("#theme-css" ).attr("href", "css/dark.css");
				jQuery(".navbar-default").addClass("dark");
				jQuery(".navbar-brand").addClass("logo-light");
				jQuery(".navbar-brand img" ).attr("src", "images/logo-fallback-white.png");
				jQuery(".navbar-brand.colorfull img" ).attr("src", "images/logo-colourfull.png");
		   });
		   
	
		  //colorfull 
		  jQuery("#theme-light").click(function(){
			  	jQuery("#theme-css" ).attr("href", "");
				jQuery(".navbar-default").removeClass("dark");
		   });
		   
		   
		   //Colorfull Right nav 
		  jQuery("#navigation-switch").click(function(){
			  	jQuery(".navbar-default").toggleClass("nav-center");
				jQuery(".navbar-default").toggleClass("nav-colorful-right");
		   });
		   //Colorfull Right nav2 
		  jQuery("#navigation-switch2").click(function(){
			  	//jQuery("#top-nav").toggleClass("shown");
				jQuery("#left-nav").toggleClass("left-nav");
				jQuery("#left-nav").toggleClass("left-nav-top");
				jQuery("#left-nav .social").toggleClass("social-hide");
				jQuery(".navbar-header").toggleClass("margin");
		   });
		   
		  
		  
		  
		  // picker buttton
		  jQuery(".picker_close").click(function(){
			  
			  	jQuery("#choose_color").toggleClass("position");
			  
		   });
		   
		   
		  
	});