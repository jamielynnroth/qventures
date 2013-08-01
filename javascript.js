
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

// Rollover feedback on nav bar 
	$('#nav a').hover(function() {
		console.log("hover!");
		var $el = $(this);
		var leftPos = $el.position().left - ($('.navselected').width() - $el.width())/2;
		$('.navselected').stop().animate({
			left: leftPos}, 400, function() {
				$('.navselected').fadeIn(400);
			});
	}, function () {
		$('.navselected').stop().fadeOut(400);
	})

}); // fn

	// $('#nav').hover(
	// 	function() {
	// 	$('.navselected').stop().fadeIn(400).css({display: "block"});
	// }, 
	// 	function() {
	// 	$('.navselected').stop().fadeOut(400).css({display: 'none'});
	// }
	// );	


//  	$('#nav1').hover(function() {
//  		console.log('hover!');
//  		$('.navselected').delay(-100).animate({
//  			left: "308"}, 500, function() {
//  				//animation complete
//  			}); // animate
//  	}); // hover

//  	 $('#nav2').hover(function() {
//  		console.log('hover!');
//  		$('.navselected').animate({
//  			left: "419"}, 500, function() {
//  				//animation complete
//  			}); // animate
//  	}); // hover

//  	 $('#nav3').hover(function() {
//  		console.log('hover!');
//  		$('.navselected').animate({
//  			left: "530"}, 500, function() {
//  				//animation complete
//  			}); // animate
//  	}); // hover

//  	$('#nav4').hover(function() {
//  		console.log('hover!');
//  		$('.navselected').animate({
//  			left: "645"}, 500, function() {
//  				//animation complete
//  			}); // animate
//  	}); // hover

//  	 $('#nav5').hover(function() {
//  		console.log('hover!');
//  		$('.navselected').animate({
//  			left: "735"
//  		}, 500, function() {
//  				//animation complete
//  			}); // animate
//  	}); // hover

//  	$('#nav6').hover(function() {
//  		console.log('hover!');
//  		$('.navselected').animate({
//  			left: "830"}, 500, function() {
//  				//animation complete
//  			}); // animate
//  	}); // hover
//}); // fn


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