$(document).ready(function() {
	var words = $('.text-animation').html().split(' ');
	$('.text-animation').css('opacity', '0');
	var parent = $('.text-animation').parent();

	for (var i = 0; i < words.length; i++) {
		var letter = words[i].split('');
		if (words[i][0] != '<') {
			for (var j = 0; j < letter.length; j++) {
				var span = '<span>'+ letter[j] +'</span>';
				$(parent).append(span);
			}
			var span = '<span class="space"></span>';
			$(parent).append(span);
		} else {
			var br = "<br>";
			$(parent).append(br);
		}
	}

	var span = $(parent).find('span');

	$(".wrapper").hover(function(event){
		var y = [];
		var x = [];
		var scale = [];
		var rotation =[];
		for (var i = 0; i < span.length; i++) {
			x[i] = getRandom(-150,150);
			y[i] = getRandom(-150,150);
			scale[i] = getRandom(0.5,3);
			rotation[i] = getRandom(-320,320) + 'deg';
		}
		TweenMax.staggerTo(span, 0.8, { cycle: { x: x, y: y, scale: scale, rotation: rotation }, ease: Bounce.easeOut }, 0);
	});

	$(".wrapper").mouseleave(function(event){
		TweenMax.staggerTo(span, 1, { cycle: { x: [0], y: [0], scale: [1], rotation: [0] }, ease: Power4.easeOut }, 0);
	});

	function getRandom(min, max) {
	  return min + Math.random() * (max + 0.1 - min);
	}

})
