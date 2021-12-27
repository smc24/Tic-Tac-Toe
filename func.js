//Create your variables prior for easier access
const newGameButton = document.querySelector('#new_game');
const helpButton = document.querySelector('#help');
const scoreBoard = document.querySelector('#score_board');
const finalMessage = document.querySelector('.final_message');


// Create the Board
class boxValues {
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
const gameBoard = new boxValues();

console.log(gameBoard);



// for(let i=0; i<9; i++){
//     let div = document.createElement('div');
//     div.setAttribute('class', 'box');
//     // document.getElementById('[#game_board]').appendChild(div);
// }
// let box = document.querySelectorAll('.box');
// console.log(box);