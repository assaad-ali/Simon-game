/********************* Global Variables /**********************/

var boxes = document.getElementsByClassName("box")
var playing = false
var clickCounter = 0
var levelCounter = 1
var gameMemory = []

var boxIds = ["green-box","red-box","yellow-box","blue-box"]

/********************* Functions /**********************/

function onBoxClick(event){

    let boxId = event.target.id

    play_sound(boxId)
    blinkBox(boxId)

    if(playing){

        if (boxId == gameMemory[clickCounter]){

            clickCounter += 1

            if (clickCounter == gameMemory.length){
                //all matches
                advanceGame()
            }
        }

        else{

            endGame()
        }
    }   
}
function startGame(){

    playing = true
    clickCounter = 0
    pickRandomBox()
    updateLevelMessage()
    removePressAnyKeyListener()
    console.log('start game')
}

function pickRandomBox(){

    let boxIndex = Math.floor(Math.random() * 3)
    let boxId = boxIds[boxIndex]
    gameMemory[gameMemory.length] = boxId
    
    console.log("pick box ", gameMemory)
    play_sound(boxId)
    blinkBox(boxId)

    

}

function endGame(){

    console.log("end")
    playing = false
    levelCounter = 1
    gameMemory = []
    displayGameOver()
    addPressAnyKeyListener()
}

function advanceGame(){

    clickCounter = 0
    levelCounter ++
    pickRandomBox()
    updateLevelMessage()
}

function play_sound(){

    console.log("play sound")
}

function blinkBox(){

    console.log("blink box")
}

function displayStartGameMessage(){

    document.getElementById("level").textContent = "Press Any Key To Start"
}

function updateLevelMessage(){

    document.getElementById("level").textContent = "Level " + levelCounter
} 

function displayGameOver(){

    document.getElementById("level").textContent = "Game Over, Press Any Key To Restart"
}
/********************* Events Listeners /**********************/

function addStartGameListeners(){

    for(i = 0; i < boxes.length; i++){

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