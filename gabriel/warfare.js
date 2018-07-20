let ship1X, ship1Y, ship2X, ship2Y;
let x = 0;
let y = 0;
function setup(){
    createCanvas(1000, 1000);
    background(0);
    ship1X = (Math.floor(Math.random() * 9)) + 1;
    ship1Y = (Math.floor(Math.random() * 9)) + 1;
    //making it multiply by 9 and THEN adding 1 makes it appearing at zero an impossibility and makes the "end of the ships's position" possible
    //to reach the edge of the screen. This matters because the checking condition for catching the ship checks if the mouse is before the end of the square 
    //and after the start of the square of the ships position.
    for(let i =0; i < 100; i++){
        ship2X = (Math.floor(Math.random() * 9)) + 1;
        ship2Y = (Math.floor(Math.random() * 9)) + 1;
        if(ship2X != ship1X || ship2Y != ship1Y){
            i = 100;
            //both ships will never have the same coordinate in one run.
        }
    }
    
    console.log(ship1X, ship1Y, ship2X, ship2Y)
    //cheat-sheet >:)
    ship1X = (ship1X * 100);
    ship1Y = (ship1Y * 100);
    ship2X = (ship2X * 100);
    ship2Y = (ship2Y * 100);
    
    fill("blue");
for(let i = 0; i < 10; i++){
    y = 0;//resets the y for each time that the loop finishes a colloum
    for(let q = 0; q < 10; q++){
        rect(x, y, 100, 100);
        y += 100
    }
    x += 100;
}
}

function mouseClicked(){
//if checks for ship 1
    if((mouseX < ship1X && mouseX > (ship1X - 100)) && (mouseY < ship1Y && mouseY > (ship1Y - 100))){
        let m = ship1X - 100;
        //this positions the coordinates to create a new colored square over the square you clikced on, using the ship's coordinates to
        //make the new square
        let n = ship1Y - 100;
        fill("yellow");
        rect(m, n, 100, 100);
    }
    //because it is specifically else if, this statement is seen as the 2nd possibility as to clicking on a square. and because its else if, it sees this 
    //statement as part of the if statement above. this saves processing power. 
    else if((mouseX < ship2X && mouseX > (ship2X - 100)) && (mouseY < ship2Y && mouseY > (ship2Y - 100))){
        let f = ship2X - 100;
        let r = ship2Y - 100;
        fill("green");
        rect(f, r, 100, 100);        
    }else{
        let fail1 = mouseX / 100;
        //this allows any square that isnt any ships' position to be clicked and to be replaced with a red square, regardless of the mouse coordinates within the
        //square
        let v = (Math.floor(fail1)) * 100;
        let fail2 = mouseY / 100;
        let s = (Math.floor(fail2)) * 100;
        fill("red");
        rect(v, s, 100, 100);
    }
    //this reads as "click on a square so it must be ship 1. it's not? 
    //guess it must be ship 2. it's not? square is red."
    }