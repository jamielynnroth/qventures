
	// Show and Hide Rollover state of MadeinNY heart
		$(function() {
			$('#madeinny').hover(function() {
				console.log('poop');
				$('#whiteheart').removeClass('show');
				$('#whiteheart').addClass('hide');
				$('#hoverstate').removeClass('hide');
				$('#hoverstate').addClass('show');
			}, function() {
				console.log('eeeee');
				$('#whiteheart').removeClass('hide');
				$('#whiteheart').addClass('show');
				$('#hoverstate').removeClass('show');
				$('#hoverstate').addClass('hide');
			});
		});


