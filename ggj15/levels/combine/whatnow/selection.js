function draw() {
    fill(125, 125, 125);
    rect(0, 0, width/2, height);

    noStroke();
    fill(25, 25, 25);
    textSize(50); 
    text("Way of the pussy?", 0 + 50, height/2); 

    fill(25, 25, 25);
    rect(width/2, 0, width/2, height);
    noStroke();
    fill(125, 125, 125);
    text("Way of the tiger?", width - width / 2 + 50, height/2);

    nextLvlButton(0, 0, width/2, height, "/ggj15/levels/onefromeach/derp.html");
    nextLvlButton(width/2, 0, width/2, height, "/ggj15/levels/what/howmany.html");
}
