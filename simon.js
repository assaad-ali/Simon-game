/********************* Global Variables /**********************/

var boxes = document.getElementsByClassName("box")
var playing = false
var clickCounter = 0
var levelCounter = 1
var gameMemory = []

var boxIds = ["green-box","red-box","yellow-box","blue-box"]


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