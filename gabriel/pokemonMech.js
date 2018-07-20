let img;
let game_status;
let turn;
function setup(){
    createCanvas(1350, 800);
    
}
let colo = ("black")
let message = "naw";
let playerHealth = 490;
let opponentHealth = 490;
function draw(){
    background(0);
    game_status = true;
    turn = 0;   
    // Opponent Stats
    
    fill("grey");
    rect(40, 40, 545, 100);
    fill("white");
    rect(50, 50, 525, 80);
    fill("black");
    text("Bozza", 62, 125);
    // Player Stats
    fill("gray");
    rect(715, 540, 545, 100);
    fill("white");
    rect(725, 550, 525, 80);
    fill("black");
    text("You", 735, 625);
    // Bottom Options
    fill("grey");
    rect(15, 670, 1320, 120);
    fill("white");
    rect(25, 680, 1300, 100);
    // Quick Attack, Flamethrower, Protect, Double Team
    textSize(20)
    fill("black");
    text('Quick Attack', 28, 695);
    text("Flamethrower", 28, 775);
    text("Protect", 1250, 695);
    text("Recovery", 1250, 775);
    fill(colo);
    text(message, 625, 400);

    
    // Opponent Health Bar/Background
    fill("black");
    rect(58, 72, 494, 22)
    fill(156, 226, 102);
    rect(60, 74, opponentHealth, 18);
    // Player Health Bar/Background
    fill("black");
    rect(738, 572, 494, 22);
    fill(156, 226, 102);
    rect(740, 574, playerHealth, 18);
}

function reset() {
        
}
function retaliate(){
    let crit = (Math.floor(Math.random() * 100));
    let chance = (Math.floor(Math.random() * 3) + 1);//random move will be returned
    if(chance == 1){
        if(crit <= 15){
        playerHealth -= 53;
    }else{
        playerHealth -= 25;
    }
}else if(chance == 2){
    if(crit <= 15){
        playerHealth -= 31;
}else{
    playerHealth -= 15;
}
}else if(chance == 3){
 if(crit <= 15){
     playerHealth -= 107;
     opponentHealth -= 20;
 }else{
     playerHealth -= 52;
 }   
}else if(chance == 4){
opponentHealth += 47;
}
}


function mouseClicked(){
    if(mouseX < 80 && mouseX > 15 && mouseY < 705 && mouseY > 685){
    opponentHealth -= 21;
    retaliate();
    }else if(mouseX < 80 && mouseX > 15 && mouseY < 785 && mouseY > 765){
        let success = Math.floor(Math.random() * 100);
        if(success <= 85){
        opponentHealth -= 54;
        retaliate();
        }else{
        opponentHealth-=0;
        }
        }else if(mouseX <1380 && mouseX > 1250 && mouseY < 705 && mouseY > 685){
        let defense = Math.random();
        if(defense <= .5){
        for(let i = 0; i < 1200; i++){
        message = "Attack blocked!"
        } 
        }else{
        colo = ("white");
        for(let i = 0; i < 1200; i++){
        colo = ("white");
                message = "Your defense game is weak.";
            }
            colo = ("black");
            retaliate();
        }
    }else if(mouseX < 1380 && mouseX > 1250 & mouseY < 785 && mouseY > 765){
        let life = (Math.floor(Math.random() * 40) * 4.9);
        playerHealth += life;
        for(let i = 0; i < 1200; i++){
            colo = "white";
            message = "Health restored";
        }
        retaliate();
        colo = "black";
    }
    
}

        //&& (mouseY < ship1Y && mouseY > (ship1Y - 100)))
