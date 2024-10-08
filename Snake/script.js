console.log("Script is running")
let direction = { x: 0, y: 0 }
const eatSound = new Audio("eatingSound.mp3");
const gameOver = new Audio("gameOver.wav")
const gameStart = new Audio("gameStart.mp3")
const turn = new Audio("turn.mp3")
let board=document.getElementById("board")
let score = 0;
let screenPaintTime = 0
let speed = 12
let snakeArr = [{ x: 2, y: 5 }];
//  food = { x: 7, y: 12 }
let a = 2;
let b = 14;
food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }

// Let us make the game functions

function main(ctime) {
    window.requestAnimationFrame(main)
    // console.log(ctime)
    if ((ctime - screenPaintTime) / 1000 < 1 / speed) {
        return;
    }
    screenPaintTime = ctime;
    gameMech();
}

function collide(snake) {

    for (let i = 1; i < snakeArr.length; i++) {
        // if you crashed into yourself
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // if you crashed into the wall
    if (snake[0].x >= 15 || snake[0].x <=0 || snake[0].y >= 15 || snake[0].y <=0)
    {
        return true;
    }

    return false
}


// let board = document.querySelector(".board")

function gameMech() {


    if (collide(snakeArr)) {
        direction = { x: 0, y: 0 }
        gameOver.play()
        snakeArr = [{ x: 2, y: 5 }]
        score = 0;
        alert("Game Over. Press any key to play again!")
    }

    // if you have eaten the food increment the score and update the food

    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        eatSound.play()
        score = +1
        scoreBox.innerHTML="Score: " + score
        snakeArr.unshift({ x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y })
     
        // let a = 2;
        // let b = 14;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    // moving the snake

    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += direction.x;
    snakeArr[0].y += direction.y;


    board.innerHTML = "";
    // This function is divided into 2 part 
    // Part1 = Design the food and the snake 

    // Let's design the snake
  snakeArr.forEach((e,index)=>{
    snakeElement=document.createElement("div")
    snakeElement.style.gridRowStart=e.y;
    snakeElement.style.gridColumnStart=e.x;

    if (index===0) {
        snakeElement.classList.add("head");
    }
    else{
        snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement)
  });

//   Display the food
   let foodElement=document.createElement("div");
  foodElement.style.gridColumnStart=food.y;
  foodElement.style.gridRowStart=food.x;
foodElement.classList.add("food")
board.appendChild(foodElement);
}

window.requestAnimationFrame(main)

window.addEventListener('keydown', e => {
    // gameStart.play()
    turn.play()
    direction = { x: 0, y: 1 }
    switch (e.key) {
        case "ArrowDown":
            turn.play()
            direction = { x: 0, y: 1 }
            console.log("ArrowDown");
            break;
    }

    switch (e.key) {
        case "ArrowUp":
            turn.play()
            direction = { x: 0, y: -1 }
            console.log("ArrowUp");
            break;
    }

    switch (e.key) {
        case "ArrowLeft":
            turn.play()
            direction = { x: -1, y: 0 }
            console.log("ArrowLeft");
            break;
    }

    switch (e.key) {
        case "ArrowRight":
            console.log("ArrowRight");
            turn.play()
            direction = { x: 1, y: 0 }
            break;
    }

})