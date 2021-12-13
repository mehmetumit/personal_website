//Game start
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const box = 20;
const eat = new Audio();
const select = new Audio();
select.src = "sounds/select.mp3";
eat.src = "sounds/eat.mp3"; 
var highScoreCount = document.getElementById("highScoreCount");
var interval = setInterval(update,1000/15);
var count = 0;
var snake = [];
var num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var food =[{x:num[Math.floor(Math.random()*18)]*25,y:num[Math.floor(Math.random()*18)]*25}];
var velocityX = 0 ;
var velocityY = 0;
var headX;
var headY;
snake[0] = {x:9*25,y:9*25};
//Game update
function update(){
    snakeMove();
    collisionDetection();
    draw(); 
}
//Draw
function draw(){
    ctx.clearRect(0,0,500,500);
    //After snake eats food
    if(food[0] != undefined){
        if(snake[0].x == food[0].x && snake[0].y== food[0].y){
            eat.play();
            count +=1;
            food.pop();
            snake.push({x:snake[snake.length-1].x,y:snake[snake.length-1].y});
            food =[{x:num[Math.floor(Math.random()*18)]*25,y:num[Math.floor(Math.random()*18)]*25}];
        }else{
            ctx.fillStyle = "yellow";
            ctx.fillRect(food[0].x,food[0].y,box,box);
        }
    }
    //Draw count
    ctx.font = "30px Arial";
    ctx.fillStyle = "mediumorchid";
    ctx.fillText(count,10,30);
    //Draw snake
    for(let i = 0;i<snake.length;i++){
        ctx.fillStyle = "#00ff00";
        if(i==0){
            ctx.fillStyle = "red";
        }
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
    }
}
//Snake moves
function snakeMove(){
   headX = snake[0].x;
   headY = snake[0].y;
   snake.pop();
   snake.unshift({x:headX+velocityX,y:headY+velocityY});
   //Snake x teleportation
   if(snake[0].x >480){
        snake[0].x = 0;
   }else if(snake[0].x <0){
        snake[0].x = 500;
   }
   //Snake y teleportation
   if(snake[0].y>480){
        snake[0].y = 0;
   }else if(snake[0].y<0){
        snake[0].y = 500;
   }
}
//Game over
function collisionDetection(){
    for(let i = 1;i<snake.length;i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            if(parseInt(highScoreCount.innerHTML) < count){highScoreCount.innerHTML = count};
            document.getElementById("gameBox").style.display = "unset";           
            clearInterval(interval);           
        }
    }
}
//Press start
function start(){
    select.play();
    count = 0;
    snake = [];
    snake[0] = {x:9*25,y:9*25};
    food =[{x:num[Math.floor(Math.random()*18)]*25,y:num[Math.floor(Math.random()*18)]*25}];
    velocityX = 0;
    velocityY = 0;
    document.getElementById("gameBox").style.display = "none"; 
    interval = setInterval(update,1000/15);
}
//Key press events
document.addEventListener("keydown",(e) =>{
    if(e.key == "ArrowRight" && velocityX != -25){
        velocityY = 0;
        velocityX = 25;
    }else if(e.key == "ArrowLeft" && velocityX != 25){
        velocityY = 0;
        velocityX = -25;
    }else if(e.key == "ArrowUp" && velocityY != 25){
        velocityX = 0;
        velocityY = -25;
    }else if(e.key == "ArrowDown" && velocityY != -25){
        velocityX = 0;
        velocityY = 25;
    }
}
);