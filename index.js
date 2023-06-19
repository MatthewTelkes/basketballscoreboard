let homeScore = document.getElementById("home-score-board")
let guestScore = document.getElementById("guest-score-board")

let defaultScoreHome = 0
let defaultScoreGuest = 0

function homeAdd1(){

    homeScore.textContent = defaultScoreHome +=1
}
function homeAdd2(){
    homeScore.textContent = defaultScoreHome +=2
}
function homeAdd3(){
    homeScore.textContent = defaultScoreHome +=3    
}
function guestAdd1(){
    guestScore.textContent = defaultScoreGuest +=1
}
function guestAdd2(){
    guestScore.textContent = defaultScoreGuest +=2   
}
function guestAdd3(){
    guestScore.textContent = defaultScoreGuest +=3    
}


function startNew(){

    defaultScoreHome = 0
    defaultScoreGuest = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}
