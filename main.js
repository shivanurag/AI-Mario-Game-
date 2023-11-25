function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin= loadSound("coin.wav");
	mario_dies= loadSound("mariodie.wav");
	gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");

	poseNet=ml5.poseNet(video,modalLoaded);
	poseNet.on('pose',gotPoses);
}

function modalLoaded()
{
	console.log("Modal Loaded!")
}
function draw() {
	game()
}

function gotPoses(results)
{
	if(results.length>0)
	{
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		
	}
}






