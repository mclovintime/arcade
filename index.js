
//g
whosTurn = 7
let botWins = 0
let playerWins = 0
let playerOneName = ""
let playerTwoName = ""
let playerOneScore = 0
let playerTwoScore = 0

document.getElementById("singlePlayer").addEventListener("click", singlePlayer)
document.getElementById("resetGame").addEventListener("click", resetGame)
document.getElementById("admitDefeat").addEventListener("click", admitDefeat)
document.getElementById("twoPlayer").addEventListener("click", twoPlayer)

document.getElementById("admitDefeat").style.visibility = "hidden";
document.getElementById("resetGame").style.visibility = "hidden";

document.getElementById("one").addEventListener("click", boxClicked)
document.getElementById("two").addEventListener("click", boxClicked)
document.getElementById("three").addEventListener("click", boxClicked)
document.getElementById("four").addEventListener("click", boxClicked)
document.getElementById("five").addEventListener("click", boxClicked)
document.getElementById("six").addEventListener("click", boxClicked)
document.getElementById("seven").addEventListener("click", boxClicked)
document.getElementById("eight").addEventListener("click", boxClicked)
document.getElementById("nine").addEventListener("click", boxClicked)

function twoPlayer(){
    whosTurn = 2
    console.log("two player is workin")
    playerOneName = document.getElementById("playerOneName").value 
    playerTwoName = document.getElementById("playerTwoName").value
    console.log(playerOneName)

    document.getElementById("playerWins").innerHTML = playerOneName + " wins: " + playerWins
    document.getElementById("playerTwoWins").innerHTML = playerTwoName + " wins: " + botWins

    document.getElementById("singlePlayer").style.display = "none";
    document.getElementById("twoPlayer").style.display = "none";
    document.getElementById("twoPlayerStuff").style.display = "none";
    document.getElementById("resetGame").style.visibility = "visible";

}

function playerOneTurn(event)    {
    if (whosTurn == 2)  {
        console.log("first player turn")
        list = getElements()
        isWinner = checkWin(list)
        let id = event.target.id
    
        
        if (document.getElementById(id).innerHTML == "")    {
        document.getElementById(id).innerHTML = "X"
        }   
        whosTurn = 3
        

        list = getElements()
    isWinner = checkWin(list)
    if (isWinner == "PLAYER WINNER")   {
        playerOneScore = playerOneScore + 1
        document.getElementById("playerWins").innerHTML = playerOneName + " wins: " + playerWins
         document.getElementById("playerTwoWins").innerHTML = playerTwoName + " wins: " + botWins
        //  setTimeout(resetGame, 1000)
         resetGame()
         
    }
    console.log(isWinner)
       
     //checkwin
    }
    }

    function playerTwoTurn(event)    {
        console.log("player two turn")
        if (whosTurn == 3)  {
            list = getElements()
            isWinner = checkWin(list)
            let id = event.target.id
        
            
            if (document.getElementById(id).innerHTML == "")    {
            document.getElementById(id).innerHTML = "O"
            }   
    
            whosTurn = 2
            console.log(whosTurn)

            list = getElements()
            isWinner = checkWin(list)
            if (isWinner == "BOT WINNER")   {
                playerTwoScore = playerTwoScore + 1
                document.getElementById("playerWins").innerHTML = playerOneName + " wins: " + playerWins
                 document.getElementById("playerTwoWins").innerHTML = playerTwoName + " wins: " + botWins
                //  setTimeout(resetGame, 1000)
                 resetGame()
                 
            }
            console.log(isWinner)
         //checkwin
        }
        }

function admitDefeat(){
    resetGame();
    document.getElementById("result").innerHTML = "The bot has won!"
    botWins = botWins + 1;
    document.getElementById("playerWins").innerHTML = "Player wins: " + playerWins
document.getElementById("botWins").innerHTML = "Computer wins: " + botWins
}

function singlePlayer() {
    document.getElementById("playerWins").innerHTML = "Player wins: " + playerWins
    document.getElementById("botWins").innerHTML = "Computer wins: " + botWins
    document.getElementById("twoPlayerStuff").style.display = "none";
    document.getElementById("twoPlayer").style.display = "none";
    document.getElementById("admitDefeat").style.visibility = "visible";
    document.getElementById("resetGame").style.visibility = "visible";
    whosTurn = 0
}

function resetGame() {
    document.getElementById("one").innerHTML = ''
    document.getElementById("two").innerHTML = ''
    document.getElementById("three").innerHTML = ''
    document.getElementById("four").innerHTML = ''
    document.getElementById("five").innerHTML = ''
    document.getElementById("six").innerHTML = ''
    document.getElementById("seven").innerHTML = ''
    document.getElementById("eight").innerHTML = ''
    document.getElementById("nine").innerHTML = ''
    document.getElementById("result").innerHTML = ""

    if(whosTurn == 1 || whosTurn == 0)  {
        whosTurn = 0
    }
    if(whosTurn == 3 || whosTurn == 2)  {
        whosTurn = 2
    }
    
}


document.getElementById("result")

// setTimeout(botTurn, 3000);

function boxClicked(event)    {
    if (whosTurn == 0)  {
    humanTurn(event)
    whosTurn = 1
    botTurn()
}
console.log(whosTurn)

if (whosTurn == 3)  {
    playerTwoTurn(event)
    return
}

    if (whosTurn == 2)  {
        playerOneTurn(event)
    }
    
}

function fixNumber(selecteded)   {  
    selecteded = selecteded + 1
if (selecteded == 1)    {
    return "one"
}
if (selecteded == 2)    {
    return "two"
}
if (selecteded == 3)    {
    return "three"
}
if (selecteded == 4)    {
    return "four"
}
if (selecteded == 5)    {
    return "five"
}
if (selecteded == 6)    {
    return "six"
}
if (selecteded == 7)    {
    return "seven"
}
if (selecteded == 8)    {
    return "eight"
}
if (selecteded == 9)    {
    return "nine"
}

}


   function humanTurn(event)    {
if (whosTurn == 0)  {
    list = getElements()
    isWinner = checkWin(list)
    let id = event.target.id

    
    if (document.getElementById(id).innerHTML == "")    {
    document.getElementById(id).innerHTML = "X"
    }   
    whosTurn = 1

    
    //checkWin
    
}
}

function botTurn()  {
    if (whosTurn == 1)  {
    let selection = 0
list = getElements()
selected = checkCases(list)
// console.log(list)
isWinner = checkWin(list)
console.log(isWinner)

if (isWinner == "BOT WINNER") {
    document.getElementById("playerWins").innerHTML = "Player wins: " + playerWins
    document.getElementById("botWins").innerHTML = "Computer wins: " + botWins
     document.getElementById("result").innerHTML = "The bot has won!"
     
    whosTurn = 0
}

if (isWinner == "draw") {
    document.getElementById("result").innerHTML = "This round is a draw!"
    console.log("testing draw")
}

}

    if (list[selected] == "X" || list[selected] == "O") {
        console.log("selection invalid!")
        selected = selected + 1
    }

    if (isWinner == "PLAYER WINNER")    {
        console.log("The player has won!")
        document.getElementById("result").innerHTML = "The player has won!"
        document.getElementById("playerWins").innerHTML = "Player wins: " + playerWins
    document.getElementById("botWins").innerHTML = "Computer wins: " + botWins
    }
    if (isWinner == "BOT WINNER")    {
        console.log("The bot has won!")
        document.getElementById("result").innerHTML = "The bot has won!"
        document.getElementById("playerWins").innerHTML = "Player wins: " + playerWins
    document.getElementById("botWins").innerHTML = "Computer wins: " + botWins
    }
    
    let returned = fixNumber(selected)
    
    if (document.getElementById(returned).innerHTML != "X") {
        if (document.getElementById(returned).innerHTML == "")  {
            document.getElementById(returned).innerHTML = "O"
        }
    }

    whosTurn = 0
    list = getElements()
    //console.log(list)
}

function getElements()  {
    let listOfResults = []
listOfResults.push(document.getElementById("one").innerHTML)
listOfResults.push(document.getElementById("two").innerHTML)
listOfResults.push(document.getElementById("three").innerHTML)
listOfResults.push(document.getElementById("four").innerHTML)
listOfResults.push(document.getElementById("five").innerHTML)
listOfResults.push(document.getElementById("six").innerHTML)
listOfResults.push(document.getElementById("seven").innerHTML)
listOfResults.push(document.getElementById("eight").innerHTML)
listOfResults.push(document.getElementById("nine").innerHTML)

return listOfResults
}


function checkWin(list) {
   // checking draw
    

    //checks for PLAYER winner
    if (list[0] == "X" && list[1] == "X" && list[2] == "X")  {
        selection = "PLAYER WINNER"
        playerWins = playerWins + 1
        return selection;
    }
    if (list[3] == "X" && list[4] == "X" && list[5] == "X"){
        selection = "PLAYER WINNER"
        playerWins = playerWins + 1
    }
    if (list[6] == "X" && list[7] == "X" && list[8] == "X")  {
        selection = "PLAYER WINNER"
        playerWins = playerWins + 1
        return selection;
    }
    
    if (list[0] == "X" && list[3] == "X" && list[6] == "X")  {
        selection = "PLAYER WINNER"
        playerWins = playerWins + 1
        return selection;
    }
    if (list[1] == "X" && list[4] == "X" && list[7] == "X")  {
        selection = "PLAYER WINNER"
        playerWins = playerWins + 1
        return selection;
    }
    if (list[2] == "X" && list[5] == "X" && list[8] == "X")  {
        selection = "PLAYER WINNER"
        playerWins = playerWins + 1
        return selection;
    }
    
    if (list[0] == "X" && list[4] == "X" && list[8] == "X")  {
        selection = "PLAYER WINNER"
        playerWins = playerWins + 1
        return selection;
    }
    if (list[2] == "X" && list[4] == "X" && list[6] == "X")  {
        selection = "PLAYER WINNER"
        return selection;
    }
    if (list[6] == "X" && list[8] == "X" && list[7] == "X")  {
        selection = "PLAYER WINNER"
        playerWins = playerWins + 1
        return selection;
    }


    if (list[0] == "O" && list[1] == "O" && list[2] == "O")  {
        selection = "BOT WINNER"
        botWins = botWins + 1
        return selection;
    }
    if (list[3] == "O" && list[4] == "O" && list[5] == "O"){
        selection = "BOT WINNER"
        botWins = botWins + 1
    }
    if (list[6] == "O" && list[7] == "O" && list[8] == "O")  {
        selection = "BOT WINNER"
        botWins = botWins + 1
        return selection;
    }
    
    if (list[0] == "O" && list[3] == "O" && list[6] == "O")  {
        selection = "BOT WINNER"
        botWins = botWins + 1
        return selection;
    }
    if (list[1] == "O" && list[4] == "O" && list[7] == "O")  {
        selection = "BOT WINNER"
        botWins = botWins + 1
        return selection;
    }
    if (list[2] == "O" && list[5] == "O" && list[8] == "O")  {
        selection = "BOT WINNER"
        botWins = botWins + 1
        return selection;
    }
    
    if (list[0] == "O" && list[4] == "O" && list[8] == "O")  {
        selection = "BOT WINNER"
        botWins = botWins + 1
        return selection;
    }
    if (list[2] == "O" && list[4] == "O" && list[6] == "O")  {
        selection = "BOT WINNER"
        botWins = botWins + 1
        return selection;
    }
    if (list[6] == "O" && list[8] == "O" && list[7] == "O")  {
        selection = "BOT WINNER"
        botWins = botWins + 1
        return selection;
    }

    // checks for bot winner
   
}

function checkCases(list)  {
// checks if it can win
    if (list[0] == "O" && list[1] == "O" && list[2] != "X")  {
        selection = 2
        return selection;
    }
    if (list[1] == "O" && list[2] == "O" && list[0] != "X"){
        selection = 0
    }
    if (list[0] == "O" && list[2] == "O" && list[1] != "X")  {
        selection = 1
        return selection;
    }
    
    if (list[3] == "O" && list[4] == "O" && list[5] != "X")  {
        selection = 5
        return selection;
    }
    if (list[5] == "O" && list[4] == "O" && list[3] != "X")  {
        selection = 3
        return selection;
    }
    if (list[3] == "O" && list[5] == "O" && list[4] != "X")  {
        selection = 4
        return selection;
    }
    
    if (list[6] == "O" && list[7] == "O" && list[8] != "X")  {
        selection = 8
        return selection;
    }
    if (list[7] == "O" && list[8] == "O" && list[6] != "X")  {
        selection = 6
        return selection;
    }
    if (list[6] == "O" && list[8] == "O" && list[7] != "X")  {
        selection = 7
        return selection;
    }

    // column cases
    if ((list[0] == "O" && list[3] == "O") && list[6] != "X")  {
        selection = 6
        return selection;
    }
    if ((list[3] == "O" && list[6] == "O") && list[0] != "X")  {
        selection = 0
        return selection;
    }
    if ((list[6] == "O" && list[0] == "O") && list[3] != "X")  {
        selection = 3
        return selection;
    }
    
    if ((list[1] == "O" && list[4] == "O") && list[7] != "X")  {
        selection = 7
        return selection;
    }
    if ((list[4] == "O" && list[7] == "O") && list[1] != "X")  {
        selection = 1
        return selection;
    }
    if ((list[1] == "O" && list[7] == "O") && list[4] != "X")  {
        selection = 4
        return selection;
    }
    
    if ((list[2] == "O" && list[5] == "O") && list[8] != "X")  {
        selection = 8
        return selection;
    }
    if ((list[5] == "O" && list[8] == "O") && list[2] != "X")  {
        selection = 2
        return selection;
    }
    if ((list[2] == "O" && list[8] == "O") && list[5] != "X")  {
        selection = 5
        return selection;
    }
    // diagonal cases
    if ((list[0] == "O" && list[4] == "O") && list[8] != "X")  {
        selection = 8
        return selection;
    }
    if ((list[4] == "O" && list[8] == "O") && list[0] != "X")  {
        selection = 0
        return selection;
    }
    if ((list[0] == "O" && list[8] == "O") && list[4] != "X")  {
        selection = 4
        return selection;
    }
    
    if ((list[6] == "O" && list[4] == "O") && list[2] != "X")  {
        selection = 2
        return selection;
    }
    if ((list[4] == "O" && list[2] == "O") && list[6] != "X")  {
        selection = 6
        return selection;
    }
    if ((list[6] == "O" && list[2] == "O") && list[4] != "X")  {
        selection = 4
        return selection;
    }
    
    //checks if it can block the human
if (list[0] == "X" && list[1] == "X" && list[2] != "O")  {
    selection = 2
    return selection;
}
if ((list[1] == "X" && list[2] == "X") && list[0] != "O"){
    selection = 0
}
if ((list[0] == "X" && list[2] == "X") && list[1] != "O")  {
    selection = 1
    return selection;
}

if (list[3] == "X" && list[4] == "X" && list[5] != "O")  {
    selection = 5
    return selection;
}
if (list[5] == "X" && list[4] == "X" && list[3] != "O")  {
    selection = 3
    return selection;
}
if ((list[3] == "X" && list[5] == "X") && list[4] != "O")  {
    selection = 4
    return selection;
}

if ((list[6] == "X" && list[7] == "X") && list[8] != "O")  {
    selection = 8
    return selection;
}
if ((list[7] == "X" && list[8] == "X") && list[6] != "O")  {
    selection = 6
    return selection;
}
if ((list[6] == "X" && list[8] == "X") && list[7] != "O")  {
    selection = 7
    return selection;
}
// column cases
if ((list[0] == "X" && list[3] == "X") && list[6] != "O")  {
    selection = 6
    return selection;
}
if ((list[3] == "X" && list[6] == "X") && list[0] != "O")  {
    selection = 0
    return selection;
}
if ((list[6] == "X" && list[0] == "X") && list[3] != "O")  {
    selection = 3
    return selection;
}

if ((list[1] == "X" && list[4] == "X") && list[7] != "O")  {
    selection = 7
    return selection;
}
if ((list[4] == "X" && list[7] == "X") && list[1] != "O")  {
    selection = 1
    return selection;
}
if ((list[1] == "X" && list[7] == "X") && list[4] != "O")  {
    selection = 4
    return selection;
}

if ((list[2] == "X" && list[5] == "X") && list[8] != "O")  {
    selection = 8
    return selection;
}
if ((list[5] == "X" && list[8] == "X") && list[2] != "O")  {
    selection = 2
    return selection;
}
if ((list[2] == "X" && list[8] == "X") && list[5] != "O")  {
    selection = 5
    return selection;
}
// diagonal cases
if ((list[0] == "X" && list[4] == "X") && list[8] != "O")  {
    selection = 8
    return selection;
}
if ((list[4] == "X" && list[8] == "X") && list[0] != "O")  {
    selection = 0
    return selection;
}
if ((list[0] == "X" && list[8] == "X") && list[4] != "O")  {
    selection = 4
    return selection;
}

if ((list[6] == "X" && list[4] == "X") && list[2] != "O")  {
    selection = 2
    return selection;
}
if ((list[4] == "X" && list[2] == "X") && list[6] != "O")  {
    selection = 6
    return selection;
}
if ((list[6] == "X" && list[2] == "X") && list[4] != "O")  {
    selection = 4
    return selection;
}
else{
    let max = 9
    let min = 1
    selection =  Math.floor(Math.random() * (max - min) + min);

    return selection
}

}

function checkDraw(){

}
