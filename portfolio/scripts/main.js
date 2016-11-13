$(document).ready(function(){
	setInterval(_randomizeHobby, 3000);
});

function _randomizeHobby(position, hobbies){

	var position = $('#hobby').offset();
	var hobbies = ['Eating', 'Raspberry PI', 'Hiking', 'LOL', 'GTA', 'Crunches', 'Angular', 'Codeforces', 'Math', 'Augmented Reality', 'Quantum Computing', 'Sugary Tea', 'Open Spaces'];
	

	
	$('#hobby').offset(position);
	$('#hobby').hide('slide', {direction: 'left'}, 500);
	setTimeout(function()
	{
		$('#hobby').text(hobbies[Math.floor(Math.random()*hobbies.length)]);
		$('#hobby').show();
	}, 1200);
	
}