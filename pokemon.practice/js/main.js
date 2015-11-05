// Arrays of relevant data for pokemon types

// Object storing game information
function game(name) {
	this.name = name;
	this.selection = 'incorrect';
	this.streak = 0;
	this.startGame = function(selection) {
		// generate new attacker and defender
		alert(selection);
	};
	this.makeSelection = function(selection) {
		this.selection = 'correct';
		alert(this.selection);
	};
	this.submitSelection = function(selection) {
		alert(selection + 'is chosen');
	};
	this.resetGame = function() {
		alert('Game is Reset');
		this.selection = 'incorrect';
		this.streak = 0;
	};
	this.startGame(this.selection);
}

var checkScore = function(selection) {
	alert(selection);
	if (selection == 'correct') {
		alert("Winner! +1");
	} else {
		alert("Ooops! Reset");
		streak = 0;
	};
}

var resetGame = function() {
	// Generate new attacker and defender
	// Set streak counter to 0
	streak = 0;
}

$(document).ready(function() {
	$('.start').on('click', function() {
		typeTest = new game('typeTest');
		$('#multiSelect').on('click', typeTest.makeSelection);
		$('#submit').on('click', typeTest.submitSelection);
		$('#reset').on('click', typeTest.resetGame);
	});
	// perhaps generate a new game object here with all the gamestate
	// information and behavior
});

// Consider adding a Generation Selector
// Consider adding a Difficulty Selector