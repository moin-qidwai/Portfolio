$(document).ready(function(){
	setInterval(_randomizeHobby, 6000);
});

function _randomizeHobby(position, hobbies){

	var position = $('#hobby').offset();
	var hobbies = ['Eat', 'Program', 'Hike', 'Play Video Games', 'Play Sports', 'Run', 'Read Articles', 'Exercise', 'Act Stupid'];
	

	
	$('#hobby').offset(position);
	$('#hobby').hide('slide', {direction: 'left'}, 1000);
	setTimeout(function()
	{
		$('#hobby').text(hobbies[Math.floor(Math.random()*hobbies.length)]);
		$('#hobby').show();
	}, 1800);
	
}