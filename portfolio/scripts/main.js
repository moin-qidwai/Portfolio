$(document).ready(function(){
	setInterval(_randomizeHobby, 3000);
});

var oldHobby = 'Eating';

function _randomizeHobby(position, hobbies){

	var position = $('#hobby').offset();
	var hobbies = ['Eating', 'Raspberry PI', 'Hiking', 'LOL', 'GTA', 'Crunches', 'Angular', 'Codeforces', 'Math', 'Augmented Reality', 'Quantum Computing', 'Tea', 'Open Spaces'];
	

	
	$('#hobby').offset(position);
	$('#hobby').hide('slide', {direction: 'left'}, 500);
	setTimeout(function()
	{
		var newHobby = hobbies[Math.floor(Math.random()*hobbies.length)];
		while(newHobby == oldHobby)
		{
			newHobby = hobbies[Math.floor(Math.random()*hobbies.length)];
		}
		$('#hobby').text(newHobby);
		$('#hobby').show();
	}, 1200);
	
}