function preload() {
	bg = loadImage("/ggj15/images/3_huutocubismi.png");
	speechBubble = loadImage("/ggj15/images/3_bubble.png");
	song = loadSound("/ggj15/music/dandt.mp3");

}

function draw() {
	zoomHandler();
	nextLvlButton(width/2 + 20, height/2 + 70, 25, 40, "/ggj15/levels/to9twice");
	speechBubbleTrigger(width/2 + 20, height/2 + 70, 25, 40);
}
