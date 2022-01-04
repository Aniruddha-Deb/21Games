// use two.js svg renderer
// controller for start
// functional logic for nim

function start() {
	document.getElementById('title').classList.add('slide-out-top');
	document.getElementById('scoreboard').classList.add('slide-in-bottom');
}

/* States */
/*
const GameMode = Object.freeze({
	Setup: 1,
	InGame: 2,
	Concluded: 3
});

var two = null;

const game = {
	stacks = [5],
	curr_player = 0,
	mode = GameMode.Setup
}

const ui = {
	start_btn = null,
	p1_scorecard = null,
	p2_scorecard = null,
	title = null,
	scoreboard = null
}

// pure functions 

function render(two, game) {
	render_stacks(two, game);
	render_scores(two, game, ui);
}

function render_stacks(two, game) {
	// each stack is 45px in width 

	var num_stacks = game.stacks.length;
	for (stack in game.stacks) {
		var group = render_stack(stack);
	}
}

function render_stack(stack) {
	var base = new Two.Path([
		new Two.Anchor(5,20),
		new Two.Anchor(5,5),
		new Two.Anchor(73,5),
		new Two.Anchor(73,20)
	]);
	var lines = [base];
	for (var i=0; i<Math.max(stack,10); i++) {
		lines.push(new Two.Line(14, 19+i*14, 64, 19+i*14));
	}
	var group = new Two.Group(lines);
	group.linewidth = 10;
	group.cap = "butt";
	group.join = "miter";
	return group;
}

// dirty functions

function add_stack() {
	game.stacks.push(5);
	render(game);
}
*/

function init() {
	var game = document.getElementById('nim-game');
	two = new Two().appendTo(game);
	two.renderer.setSize(game.offsetWidth, game.offsetHeight);

	//populateUI();

	//render(two, game);
}

function populateUI() {
	ui.start_btn    = document.getElementById('start-button');
	ui.p1_scorecard = document.getElementById('p1_scorecard');
	ui.p2_scorecard = document.getElementById('p2_scorecard');
	ui.title        = document.getElementById('title');
	ui.scoreboard   = document.getElementById('scoreboard');
}