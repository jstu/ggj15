var bg;
var zoomMask;
var zoomModifier = 2.5;
var isZoomed = false;
var speechBubble;
var song;

function setup() {
	imageMode(CENTER);
	createCanvas(1024,576);
	if(song != null)
		song.play();
}
 
function zoomHandler() {
    if(keyIsPressed && keyCode == SHIFT && mouseIsPressed) {
        isZoomed = true;
        image(bg, mouseX, mouseY, width * zoomModifier, height * zoomModifier);
    }else {
        isZoomed = false;
        image(bg, width/2, height/2, width, height);
    }
}

function nextLvlButton(x, y, sizeX, sizeY, levelPath) {
   if(mouseIsPressed && !isZoomed) { 
        if(mouseX > x && mouseX < (x + sizeX)) {
            if(mouseY > y && mouseY < (y + sizeY)) {
                window.location.href = levelPath; 
            }
        }
   }
}

function speechBubbleTrigger(x, y, sizeX, sizeY) {
	if(mouseX > x && mouseX < (x + sizeX)) {
	    if(mouseY > y && mouseY < (y + sizeY)) {
	       image(speechBubble, 75, height - 100, 150,150);
	    }
	}
}

