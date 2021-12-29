//Create your variables prior for easier access
const newGameButton = document.querySelector('#new_game');
const helpButton = document.querySelector('#help');
const winningCombinations = [
    [0,1,2], //rows
    [3,4,5],
    [6,7,8],
    [0,3,6], //columns
    [1,4,7],
    [3,5,8],
    [0,4,8], //diagonals
    [2,4,6]
]

// Create the Board
class BoxValues {
    constructor(boxes) {
        this.boxes = boxes;
        this.xIsNext = true; // X goes first
        console.log(this.boxes)
    }
    playersChoice(element){
        const boxes = this.boxes;
        element.innerText = this.xIsNext ? 'X':'O'; //displays the x or o
        this.boxes = boxes;
        this.xIsNext = !this.xIsNext; //'O' goes next
    }   
    
    //check for a win, lose, cat
    //Web Dev Simplified YT source
    whoWins(currentCharacter){
        const boxElements = this.boxes;
        return winningCombinations.some((combo)=> { //Checks to see if at least one combination is true
            return combo.every((index)=> { // iterates through through the combo to find 3 in a row
                return boxElements[index].innerText===currentCharacter; //grabs value at the given index
                
            }
            )
        })
    }

    
}
   
   
   
//Connect to div.box elements 
let gameBoard = new BoxValues(document.querySelectorAll('.box'));


function eventHandler(event){
    console.log(event.target);
        
    //box can only be clicked on once
    if(event.target.innerText==='') {//ASK ABOUT THE EMPTY STRING
        gameBoard.playersChoice(event.target)//just the box
    }
   
    //added to keep track of values for winning combinations
    //need to display winning message
    if(gameBoard.whoWins(event.target.innerText)){
        console.log('winner');
        setTimeout(()=>{ //allows the mark to be placed before the winning message
            alert(`Ayyee Congrats ${gameBoard.xIsNext ? 'O':'X'}! You win!`);
            },500); 
            gameBoard.boxes.forEach((box)=> {
                box.removeEventListener('click', eventHandler);
        })
    } else {
            console.log('Tie');
    }
}
//Let's get the event listeners going
gameBoard.boxes.forEach((box)=> {
    box.addEventListener('click', eventHandler)     
    });
   

    
//let's get those buttons percolatin'
   newGameButton.addEventListener('click', ()=> {
       console.log('new game')
       gameBoard = new BoxValues(document.querySelectorAll('.box')); //reassigning the value of the gameBoard variable in this case works 
       gameBoard.boxes.forEach((box)=> { //ends the game
           box.innerText = '';
           box.addEventListener('click', eventHandler) //adds event listener back when user starts a new game  
       })
   });
    
    function instructions(){
        alert("You got this! Try and get three in a row before your opponent. If your opponent has two in a row, mark the third spot before they do! Tip: Figure out the pattern and you'll never lose");
    }
    
    helpButton.addEventListener('click', instructions);