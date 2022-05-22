/********************* Global Variables /**********************/

var boxes = document.getElementsByClassName("box")
var playing = false
var clickCounter = 0
var levelCounter = 1
var gameMemory = []

var boxIds = ["green-box","red-box","yellow-box","blue-box"]

/********************* Functions /**********************/

function onBoxClick(event){
    if(playing){

        if (event.target.id != gameMemory[clickCounter]){

            endGame()
        }
    
        clickCounter += 1
        
        if (clickCounter == gameMemory.length){
            //all matches
            advanceGame()
        }
    }   
}

/********************* Events Listeners /**********************/

function addStartGameListeners(){

    for(i = 0; i < boxes.length; i++){

        console.log(boxes[i])
        boxes[i].addEventListener('click', onBoxClick)
    }
}

function addPressAnyKeyListener(){

    document.addEventListener("keypress", startGame)
}

function removePressAnyKeyListener(){

    document.removeEventListener("keypress", startGame)
}

// intialize game
function initSimon(){

    displayStartGameMessage()
    addPressAnyKeyListener()
    addStartGameListeners()
}

window.onload = function(){

    initSimon()
}