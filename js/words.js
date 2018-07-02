$(document).ready(function(){
	var windowHeight = $(window).height(),
	marginTop=0;
	var words=$('body ul');
	function scroll(){
		$('#button').click(function(){
			if (marginTop>-windowHeight*($('ul').children().length-1)) {
				marginTop=marginTop-windowHeight;
				$('li:first').animate({marginTop:marginTop},600)
			}
		})

		var timer=null;
		$('body').mousewheel(function(event,delta){
			if(timer!=null){
				clearTimeout(timer);
			}
			timer=setTimeout(function(){
				var dir = delta > 0 ? 'Up' : 'Down';
        		if (dir == 'Up') {
        			if (marginTop>-windowHeight*$('ul').children().length && marginTop<0) {
        				marginTop=marginTop+windowHeight;
        				$('li:first').animate({marginTop:marginTop},500)
        			}
        		} 
        		else {
        			if (marginTop>-windowHeight*($('ul').children().length-1) && marginTop<=0) {
        				marginTop=marginTop-windowHeight;
        				$('li:first').animate({marginTop:marginTop},500)
        			}
        		}
        	return false;
			},100)
		})
	}

	scroll();
	$('.icon').click(function(){
		$('#floatEditor').css({'visibility':'visible'})
	})
	$('#closeButton').click(function(){
		$('#floatEditor').css({'visibility':'hidden'})
	})
	$('#confirmButton').click(function(){
		var signature=$('#signature').val().replace('\n','<br>'),
		word=$('#words').val().replace('\n','<br/>');
		words.append('<li><p class="words">'+word+'</p><p class="signature">'+signature+'</p></li>');
		$('#floatEditor').css({'visibility':'hidden'});
		console.log($('#words').html().replace('\n','<br/>'));
		marginTop=-windowHeight*($('ul').children().length-1);
		$('li:first').css({marginTop:marginTop});
	})

})