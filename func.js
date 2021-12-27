//Create your variables prior for easier access
// const gameBoard = document.querySelectorAll('.box');
const newGameButton = document.querySelector('#new_game');
const helpButton = document.querySelector('#help');
const scoreBoard = document.querySelector('#score_board');
const finalMessage = document.querySelector('.final_message');


// Create the Board
let gameGrid = class Board {
    constructor(boxes) {
        this.boxes = {
            boxes:Array(9).fill(null),
            xIsNext: true,
        }
    }
playersChoice(i){
    const boxes = this.boxes.boxes;
    boxes[i] = this.boxes.xIsNext ? 'X':'O';
    this.holdPlace({
        boxes: boxes,
        xIsNext: !this.boxes.xIsNext,
    });
}   
}
console.log(gameGrid);