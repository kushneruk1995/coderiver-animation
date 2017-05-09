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
			var span = '<span> </span>';
			$(parent).append(span);
		} else {
			var br = "<br>";
			$(parent).append(br);
		}
	}

	$(".wrapper").mouseover(function(event){
		$("span" ).each(function( index ) {
			TweenLite.to($(this), 1, {left: getRandom(-100, 100), top: getRandom(-100, 100), rotation:getRandom(-360, 360), opacity: getRandom(1, 0.1)});
		});
	});

	$(".wrapper").mouseleave(function(event){
		$("span" ).each(function( index ) {
			TweenLite.to($(this), 1, {left: 0, top: 0, rotation:0, opacity:1});
		});
	});

	function getRandom(min, max) {
	  return min + Math.random() * (max + 0.1 - min);
	}

})
