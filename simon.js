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