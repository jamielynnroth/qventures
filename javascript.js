
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

// Portfolio Page- Filter companies by coast
		$(function () {
			// Show east coast only when east is clicked
			$('#filterEast').click(function() {
				$('#companygrid').find('.east').removeClass('hide');
				$('#companygrid').find('.west').addClass('hide');
				$('#companygrid').find('.acquired').addClass('hide');
			});
			// Show west coast only when west is clicked
			$('#filterWest').click(function() {
				$('#companygrid').find('.west').removeClass('hide');
				$('#companygrid').find('.east').addClass('hide');
				$('#companygrid').find('.acquired').addClass('hide');
			});
			// Show all companies
			$('#showAll').click(function() {
				$('#companygrid').find('.west').removeClass('hide');
				$('#companygrid').find('.east').removeClass('hide');
				$('#companygrid').find('.acquired').removeClass('hide');
			});

		});





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