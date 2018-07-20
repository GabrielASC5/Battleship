function setup(){
    createCanvas(500, 500);
    background(225);
        fill(145, 10, 61);
        rect(70, 20, 30, 30);
        fill(232, 157, 242);
        triangle(110, 50, 150, 50, 130, 20);
        fill("green");
        ellipse(170, 35, 30, 30);
        fill("white");
        rect(450, 450, 40, 40);
    }
    let shape = 0;
    let i = 255;
    function mouseClicked(){
if(mouseX >= 70 && mouseX <= 100 & mouseY >= 20 && mouseY <= 50){
i = color(145, 10, 61)
shape = 1;
}else if(mouseX >= 110 && mouseX <= 150 && mouseY >= 20 && mouseY <= 50){
    i = color(232, 157, 242);
    shape = 2;
}else if(mouseX >= 140 && mouseX <= 200 && mouseY >= 5 && mouseY <= 65){
i = color("green");
shape = 3;
}else if(mouseX >= 450 && mouseX <= 490 && mouseY >= 450 && mouseY <= 490){
    background(225);
        fill(145, 10, 61);
        rect(70, 20, 30, 30);
        fill(232, 157, 242);
        triangle(110, 50, 150, 50, 130, 20);
        fill("green");
        ellipse(170, 35, 30, 30);
        fill("white");
        rect(450, 450, 40, 40);
        shape = 0;
        i = 255;
}
    }
    
    
    function mouseDragged(){
        fill(i);
        if(shape == 1){
        rect(mouseX, mouseY, Math.floor(Math.random() * 30), Math.floor(Math.random() * 30));   
    }else if(shape == 2){
        triangle(mouseX, mouseY, mouseX + Math.floor(Math.random() * 20), mouseY + Math.floor(Math.random() * 30), mouseX + Math.floor(Math.random() * 30), mouseY - Math.floor(Math.random() * 30));
    }else if(shape == 3){
        ellipse(mouseX, mouseY, Math.floor(Math.random() * 30), Math.floor(Math.random() * 30));
    }
    }
