/*let colo = "blue";
let colour = "blue";
function setup(){
    createCanvas(600, 600);
    background(0);
    fill(colo);
    rect(0, 0, 300, 600);
    fill(colour);
    rect(300, 0, 300, 600);
}

function mouseClicked(){
    if(mouseX < 300){
    if(colo == "blue"){
        colo = "red";
    }
    else if(colo == "red"){
        colo = "blue";
    }
    fill(colo);
    rect(0, 0, 300, 600);
    }
    if(mouseX > 300){
        if(colour == "blue"){
    colour = "red";
}else if(colour == "red"){
    colour = "blue";
}
fill(colour);
rect(300, 0, 300, 600);
}

}*/
let colo = ["red", "blue", "green", "orange", "yellow"];
let q = 0;
let o = 1;
function setup(){
    createCanvas(600, 600);
    background(0);
    fill(colo[q])
    rect(0, 0, 300, 600);
    fill(colo[o]);
    rect(300, 0, 300, 600);
}

function draw(){
    fill(colo[q]);
    rect(0, 0, 300, 600);
    fill(colo[o]);
    rect(300, 0, 300, 600);
}
function mouseClicked(){
    

    q++;
    o++;
    
    if(q == colo.length){
        q = 0;
    }
    if(o == colo.length){
        o = 0;
    }
}