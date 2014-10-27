jQuery(window).bind('load', function() {
	jQuery('.foreground').toggle('slow');
});


(function($) {

	$(function() {

		$(".node:last-child").css("border","none");

		$("#isotope-options .option-set li:first-child a").addClass("selected");
	});

})(jQuery);



(function($) {
	jQuery(document).ready(function($) {
		if(jQuery(".portfolio-grid").length){
			var $container = jQuery('#isotope-container'),
				filters = {},
				items_count = jQuery(".isotope-element").size();
			
			$container.imagesLoaded( function(){	
				setColumnWidth();
				$container.isotope({
					itemSelector : '.isotope-element',
					resizable : false,
					transformsEnabled : true,
					layoutMode: 'fitRows'
				});		
			});
			
			function getNumColumns(){
				
				var $folioWrapper = jQuery('#isotope-container').data('cols');
				
				if($folioWrapper == '1col') {
					var winWidth = jQuery("#isotope-container").width();		
					var column = 1;		
					return column;
				}
				
				if($folioWrapper == '2cols') {
					var winWidth = jQuery("#isotope-container").width();		
					var column = 2;		
					if (winWidth<380) column = 1;
					return column;
				}
				
				else if ($folioWrapper == '3cols') {
					var winWidth = jQuery("#isotope-container").width();		
					var column = 3;		
					if (winWidth<380) column = 1;
					else if(winWidth>=380 && winWidth<788)  column = 2;
					else if(winWidth>=788 && winWidth<940)  column = 3;
					else if(winWidth>=940) column = 3;
					return column;
				}
				
				else if ($folioWrapper == '4cols') {
					var winWidth = jQuery("#isotope-container").width();		
					var column = 4;		
					if (winWidth<380) column = 1;
					else if(winWidth>=380 && winWidth<788)  column = 2;
					else if(winWidth>=788 && winWidth<940)  column = 3;
					else if(winWidth>=940) column = 4;		
					return column;
				}
			}
			
			function setColumnWidth(){
				var columns = getNumColumns();		
			
				var containerWidth = jQuery("#isotope-container").width();		
				var postWidth = containerWidth/columns;
				postWidth = Math.floor(postWidth);
		 		
				jQuery(".isotope-element").each(function(index){
					jQuery(this).css({"width":postWidth+"px"});				
				});
			}
				
			function arrange(){
				setColumnWidth();		
				$container.isotope('reLayout');	
			}
				
			jQuery(window).on("debouncedresize", function( event ) {	
				arrange();		
			});
		
		
		
 		};
	});
})(jQuery);





(function($) {


	$(document).ready(function () {

		if($.cookie('the_cookie')==0)
			styleSwitch(0)

		function styleSwitch(cookie){
			if(cookie==0){
				$('#style-mobile').remove();
				$('#skeleton-mobile').remove();
				$('.switcher').text("Responsive Version");
				$.cookie('the_cookie',0);
			}else{
				$('head').append('<link rel="stylesheet" href="sites/all/themes/theme845/css/style-mobile.css" media="screen" id="style-mobile">');
				$('head').append('<link rel="stylesheet" href="sites/all/themes/theme845/css/skeleton-mobile.css" media="screen" id="skeleton-mobile">');
		  		$('.switcher').text("Desktop Version only");
		 		$.cookie('the_cookie',1);
			}
		}

		$('.switcher').click(function(){
			
			styleSwitch($.cookie('the_cookie')==0?1:0);
			location.reload();
		});
	});
})(jQuery);
