/**
 * @author Khaled Alansari
 */
$(document).ready(function() {
	if($("#adsCarousel").length){
		console.log('adsCarousel element exist');
		$("#adsCarousel").owlCarousel({
			autoPlay	: true,
			pagination: false,
			items 		: 3,
			loop			: true,
			margin		: 10
		});
	}
	else {
		console.log('adsCarousel element doesn\'t exist');
	}
	$('#collapse').on('click', function(){
		$('body').append('<div class="backdrop"></div>');
		setTimeout(function(){
			$('body .backdrop').addClass('open');
		},100);
		$('nav.sidemenu').addClass('in');
	});
	$('body').on('click', 'div.backdrop' ,function(e){
		$(this).removeClass('open');
		$('nav.sidemenu').removeClass('in');
		setTimeout(function(){
			$('body .backdrop').remove();
		},800);
	});
	
	if($('#itemImgs').length){
		$('#itemImgs').owlCarousel({
			items		: 1,
			loop		: true
		});
	}
});