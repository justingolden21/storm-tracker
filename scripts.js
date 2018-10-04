$(function() {

	//random background
	// let imgNames = ['brain'];
	// let imgNames = ['tarn','rooftop','vents','visions', 'shot', 'empty', 'seething', 'ascension', 'pyretic', 'desperate', 'past', 'gifts', 'baral', 'electromancer', 'confusion', 'probe', 'brain'];
	let imgNames = ['tarn','visions', 'seething', 'ascension', 'pyretic', 'past', 'electromancer', 'probe', 'brain'];
	$('body').css('background-image', 'url("img/' + imgNames[Math.floor(Math.random()*imgNames.length)] + '.jpg")');

	$('.btn-minus').on('click', function() {
		let input = $(this).parent().parent().children('input[type=number]');
		input.val(parseInt(input.val() )-1 );
	});
	$('.btn-plus').on('click', function() {
		let input = $(this).parent().parent().children('input[type=number]');
		input.val(parseInt(input.val() )+1 );
	});

	//easy solution to dealing with inputs, increment, decrement, and clear buttons
	$('body').on('click', function() {
		drawMana();
		drawStorm();
	});
	$('body').on('keyup', function() {
		drawMana();
		drawStorm();
	});

});

function drawMana() {
	$('#manaDiv').html('');

	let colorNames = 'white blue black red green colorless'.split(' ');
	for(let i=0; i<colorNames.length; i++) {
		for(let j=0; j<Math.min($('#'+colorNames[i]+'Input').val(),100); j++) {
			$('#manaDiv').append('<img width="32px" src="img/'+colorNames[i]+'.svg">');
		}
	}
}
function drawStorm() {
	$('#stormDiv').html('');
	for(let i=0; i<Math.min($('#stormInput').val(),100); i++) {
		$('#stormDiv').append('<img width="32px" src="img/energy.svg">');
	}
}
