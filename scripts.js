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
	for(let i=0; i<$('#blueInput').val(); i++) {
		$('#manaDiv').append('<img width="32px" src="img/blue.svg">');
	}
	for(let i=0; i<$('#redInput').val(); i++) {
		$('#manaDiv').append('<img width="32px" src="img/red.svg">');
	}
	for(let i=0; i<$('#colorlessInput').val(); i++) {
		$('#manaDiv').append('<img width="32px" src="img/colorless.svg">');
	}
}
function drawStorm() {
	$('#stormDiv').html('');
	for(let i=0; i<$('#stormInput').val(); i++) {
		$('#stormDiv').append('<img width="32px" src="img/energy.svg">');
	}
}
