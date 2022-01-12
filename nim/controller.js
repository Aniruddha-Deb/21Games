// use two.js svg renderer
// controller for start
// functional logic for nim

function start() {
	//var game_div = document.getElementById('nim-game');
	//two.renderer.setSize(game_div.offsetWidth, game_div.offsetHeight);
	document.getElementById('title').classList.add('slide-out-top');
	document.getElementById('scoreboard').classList.add('slide-in-bottom');
	document.getElementById('start-button').classList.add('slide-out-bottom');
}

/* States */

const GameMode = Object.freeze({
	Setup: 1,
	InGame: 2,
	Concluded: 3
});

var two = null;

const game = {
	stack_sizes : [5,8,3,2,16],
	object_graph : {},
	curr_player : 0,
	mode : GameMode.Setup
}

const ui = {
	start_btn : null,
	p1_scorecard : null,
	p2_scorecard : null,
	title : null,
	scoreboard : null
}

// pure functions 

function render(two, game) {
	render_stacks(two, game);
	//render_scores(two, game, ui);
	two.update();
}

function render_stacks(two, game) {
	var num_stacks = game.stack_sizes.length;
	var all_stacks = []
	for (stack in game.stack_sizes) {
		var group = render_stack(two, game.stack_sizes[stack]);
		group.translation.x += stack*(group.getBoundingClientRect().width + 10);
		all_stacks.push(group);
	}

	var two_stacks = two.makeGroup(all_stacks);
	two_stacks.center();
	two_stacks.scale *= 1.2;
	two_stacks.translation.y += (two.height/2)-60 - two_stacks.getBoundingClientRect().height/2;

	var add_stack = two.makeText("+", two_stacks.getBoundingClientRect().width/2 + 70, (two.height/2)-105);
	add_stack.size = 60;

}

function highlight(id) {
	return () => {
		game.object_graph[id].children.map((c) => {game.object_graph[c].onHover()});
		game.object_graph[id].stroke = "green";
		two.update();
	}
}

function render_stack(two, stack) {
	var base = new Two.Path([
		new Two.Anchor(5,-30),
		new Two.Anchor(5,-5),
		new Two.Anchor(85,-5),
		new Two.Anchor(85,-30)
	]);
	base.closed = false;
	base.linewidth = 10;
	base.cap = "butt";
	base.join = "round";
	base.stroke = 'rgb(30,35,36)';
	base.onHover = highlight(base.id);
	base.children = [];

	game.object_graph[base.id] = base;

	var lines = [base];
	var i;
	var gt = stack > 10;
	var lim = Math.min(stack,10);
	if (stack > 10) lim = 9;
	for (i=0; i<lim; i++) {
		var l = new Two.Line(25, -25-i*20, 65, -25-i*20);
		l.linewidth = 10;
		l.cap = "round";
		l.join = "round";
		l.onHover = highlight(l.id);
		l.children = [];
		l.stroke = 'rgb(30,35,36)';
		lines.at(-1).children.push(l.id);
		game.object_graph[l.id] = l;
		lines.push(l);
	}
	if (gt) {
		// add ellipsis
		var l = new Two.Line(32.5, -25-(i-1)*20-13, 57.5, -25-(i-1)*20-13);
		l.linewidth = 6;
		l.cap = "round";
		lines.push(l);
		var l1 = new Two.Line(40, -25-(i-1)*20-23, 50, -25-(i-1)*20-23);
		l1.linewidth = 4;
		l1.cap = "round";
		lines.push(l1);
		i += 1;
	}
	var nlabel = new Two.Text(stack+"", 45, -25-20*i, "bold");
	nlabel.size = 30;
	lines.push(nlabel);

	var optRemove = new Two.Line(40, 20, 50, 20);
	optRemove.linewidth = 5;
	optRemove.stroke = "red"
	optRemove.cap = "square";

	lines.push(optRemove);
	var group = two.makeGroup(lines);

	return group;
}

// dirty functions

function mouseClickListener(e) {
	var x = e.clientX, y = e.clientY;
	elementMouseIsOver = document.elementFromPoint(x, y);
	console.log(elementMouseIsOver);
	var twoId = elementMouseIsOver.id;
	console.log(twoId);
	game.object_graph[twoId].onHover();
}

function add_stack() {
	game.stacks.push(5);
	render(game);
}

function init() {
	var game_div = document.getElementById('nim-game');
	console.log(game_div.clientHeight);
	two = new Two({fitted: true}).appendTo(game_div);
	two.scene.translation.x += (two.width)/2
	two.scene.translation.y += (two.height)/2
	window.addEventListener('click', mouseClickListener);

	two.makeLine(0,0,1000,0);
	two.makeLine(0,0,0,1000);

	populateUI();

	console.log(game);

	render(two, game);
}

function populateUI() {
	ui.start_btn    = document.getElementById('start-button');
	ui.p1_scorecard = document.getElementById('p1_scorecard');
	ui.p2_scorecard = document.getElementById('p2_scorecard');
	ui.title        = document.getElementById('title');
	ui.scoreboard   = document.getElementById('scoreboard');
}