
	// All Pages


	// Show and Hide Rollover state of MadeinNY heart
		$(document).ready(function() {
			$('#madeinny').hover(function() {
				// console.log('poop');
				$('#whiteheart').removeClass('show');
				$('#whiteheart').addClass('hide');
				$('#hoverstate').removeClass('hide');
				$('#hoverstate').addClass('show');
			}, function() {
				// console.log('eeeee');
				$('#whiteheart').removeClass('hide');
				$('#whiteheart').addClass('show');
				$('#hoverstate').removeClass('show');
				$('#hoverstate').addClass('hide');
			});
		});


		$(function() {
			$('.pure-u-1-4').hover(function() {
				$(this).show('.rollover');
			});
		});



// Team page toggle show .rollover state on hover for small blocks
		$(function () {
			$('#teamgrid .pure-u-1-4').hover(function () {
				$('.rollover', this).addClass('teamshow');
			}, function () {
				$('.rollover', this).removeClass('teamshow');
			});
		});
		
// Team page toggle .rollover state on hover for Pedro
		$(function () {
			$('#teamgrid .pure-u-1-2').hover(function () {
				$('.rollover', this).addClass('teamshow');
			}, function () {
				$('.rollover', this).removeClass('teamshow');
			});
		});

// Portfolio Page - toggle rollover state on hover 
		$(function () {
			$('#companygrid > .pure-u-1-4').hover(function() {
				$('.rollover', this).addClass('teamshow');
			}, function () {
				$('.rollover', this).removeClass('teamshow');
			
			});
		});

// Portfolio Page- Filter companies by coast and animate selected bar
		$(function () {
			// Show east coast only when east is clicked
			$('#filterEast').click(function() {
				$('#bar').find('img').animate({
					left: "152px"}, 1000, function() {
						//animation complete
					});
				$('#companygrid').find('.east').removeClass('hide');
				$('#companygrid').find('.west').addClass('hide');
				$('#companygrid').find('.acquired').addClass('hide');
			});
			// Show west coast only when west is clicked
			$('#filterWest').click(function() {
				$('#bar').find('img').animate({
					left: "304px"}, 1000, function() {
						//animation complete
					});
				$('#companygrid').find('.west').removeClass('hide');
				$('#companygrid').find('.east').addClass('hide');
				$('#companygrid').find('.acquired').addClass('hide');
			});
			// Show all companies
			$('#showAll').click(function() {
				$('#bar').find('img').animate({
					left: "0"}, 1000, function() {
						//animation complete
					});
				$('#companygrid').find('.west').removeClass('hide');
				$('#companygrid').find('.east').removeClass('hide');
				$('#companygrid').find('.acquired').removeClass('hide');
			});

		}); //fn

//NAVIGATION BAR ANIMATIONS

$(function () {
	// First check what page is loaded 
	var url = window.location.href;
	var urlArray = url.split('/');
	var currentPage= urlArray[urlArray.length-1];
//Rollover feedback on nav bar 
$('#nav').hover(function() {
	$('#nav a').hover(function() {
		console.log("hover!");
		var $el = $(this);
		var leftPos = $el.position().left - ($('.navselected').width() - $el.width())/2;
		$('.navselected').stop().animate({
			left: leftPos}, 400, function() {
				$('.navselected').removeClass('hide');
				$('.navselected').stop().fadeIn(400);	

			} //animate callback
			); // animate fn
	}); // nav a hover
		}, function () {
			// On the landing page, make red bar disappear when nav is not being hovered upon
			if (currentPage === 'index') {
				$('.navselected').stop().fadeOut(400);
			}
			else {
				// On any other page besides the home page
				// Slide the bar back to the current page when nav is not being hovered upon
				// for each link in the nav bar:
				$('#nav ul a').each(function() {
					
					// For each link in the navbar, get the pathname
					var $el = $(this); 
					var pathname= $el.attr('href').split('/');
					pathname = pathname[pathname.length-1];

					// If the pathname is the same as the page that is loaded 
					if (pathname === currentPage) {
							// Get the position of the link and center check the left position
							// to appropriately center the bar above it
						var navItemWidth = $(this).width();
						var barWidth = 110;
						var diff = barWidth - navItemWidth;
						var balance = diff/2;
						var origLeftPos= $(this).position().left - balance;
						// Move the bar to the correct position and then show it if its not already
						$('.navselected').stop().animate({
							left: origLeftPos}, 400, function() {
								//animation complete
								$('.navselected').removeClass('hide');
							});
						}
					});	
			}
        });// hover

// force event to fire first time
$('#nav').trigger('mouseout');

}); // fn



// Jobs Page 

// $(document).ready(function() {
// 	var listStartups = function() {
// 		$.getJSON('https://api.angel.co/1/startups/117927/roles?direction=outgoing&role=past_investor' + '&callback=?', function(json) {
// 		console.log(json);
// 		$('#jobs').html("<h2>We've invested in</h2><img src=" + startup_roles[0] + "/>");
// 	});
// 	};

// 	listStartups();
// });