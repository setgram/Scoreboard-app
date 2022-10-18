let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreEl =document.getElementById("home-score")
let homeScore = 0




function incrementHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreE2 =document.getElementById("home-score")


function incrementHomeScoreTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScoreE3 =document.getElementById("home-score")

function incrementHomeScoreThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

/* guest score */

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreE1 =document.getElementById("guest-score")
let guestScore = 0



function incrementGuestScoreOne() {
    guestScore += 1
    guestScore.textContent = guestScore
}

let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreE2 =document.getElementById("guest-score")

function incrementGuestScoreTwo(){
    guestScore += 2
    guestScoreE2.textContent = guestScore
}

let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScoreE3 =document.getElementById("guest-score")

function incrementGuestScoreThree(){
    guestScore += 3
    guestScoreE3.textContent = guestScore
}