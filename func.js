//Create your variables prior for easier access
const newGameButton = document.querySelector('#new_game');
const helpButton = document.querySelector('#help');
const scoreBoard = document.querySelector('#score_board');
const finalMessage = document.querySelector('#final_message');
const winningCombinations = [
    [0,1,2], //rows
    [3,4,5],
    [6,7,8],
    [0,3,6], //colomns
    [1,4,7],
    [3,5,8],
    [0,4,8], //diagonals
    [2,4,6]
]

// Create the Board
class BoxValues {
    constructor(boxes) {
        this.boxes = boxes;
        this.xIsNext = true;
    }
    playersChoice(element){
        const boxes = this.boxes;
        element.innerText = this.xIsNext ? 'X':'O'; //displays the x or o
        this.boxes = boxes;
        this.xIsNext = !this.xIsNext; //displays 'O'
    }   
    
    //check for a win, lose, cat
    //Web Dev Simplified YT source
    whoWins(currentCharacter){
        const boxElements = this.boxes;
        console.log(currentCharacter);//make sure it's displaying the character alone
        return winningCombinations.some((combo)=> { //Checks to see if at least one combination is true
            console.log(combo);
            return combo.every((index)=> { // iterates through through the combo to find 3 in a row
                console.log(index);
                return boxElements[index].innerText===currentCharacter; //grabs value at the given index
                
            }
            )
        })
    }
    
}
//Connect to div.box elements 
const gameBoard = new BoxValues(document.querySelectorAll('.box'));
console.log(gameBoard.boxes);


//Let's get the event listeners going
gameBoard.boxes.forEach((box)=> {
    box.addEventListener('click', (event)=> {
        console.log(event.target);
        gameBoard.playersChoice(event.target);
       
        //added to keep track of values for winning combinations
        //need to display winning message
        if(gameBoard.whoWins(event.target.innerText)){
            console.log('winner');
        } else {
            console.log('Tie')
            
        } 
        
    });
    
});

//append child to finalMessage html element
let winningMessageTxt = document.createElement('div');
winningMessageTxt.setAttribute('id', 'txt');
finalMessage.appendChild(winningMessageTxt);

//create a variable with the value of the final message element text
let winningTxt = document.querySelector('#txt').innerText;
console.log(winningTxt);