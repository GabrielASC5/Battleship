function setup(){
    createCanvas(600, 600);
    
}
let x = 300;
let y = 300;
let xChange=0;
let yChange=0;
function draw(){
    background(100);
    
    ellipse(x, y, 100);
        x+=xChange;
        y+=yChange;
        if(x > 600){
    xChange*=-1;
    x+=xChange;
        y+=yChange;
        }    
        if(x < 0){
            xChange*=-1;
            x+=xChange;
        y+=yChange;
        }
        if(y > 600){
            yChange*=-1;
            x+=xChange;
        y+=yChange;
        }
        if(y < 0){
            yChange*=-1;
            x+=xChange;
        y+=yChange;
        }
    }
    function mouseClicked(){
        x = mouseX;
        y = mouseY;
        xChange = Math.floor(Math.random() * 20);
        yChange = Math.floor(Math.random() * 20);
        
    }   
    
  
