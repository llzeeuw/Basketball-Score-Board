/* Declare count variables */

let homeCount = 0;
let guestCount = 0;

/* Link count variables to HTML file */

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");


/* Add on-click event for home buttons*/
document.getElementById("homebutton1").addEventListener("click", homeIncrement1);
document.getElementById("homebutton2").addEventListener("click", homeIncrement2);
document.getElementById("homebutton3").addEventListener("click", homeIncrement3);

/* Add on-click event for guest buttons*/
document.getElementById("guestbutton1").addEventListener("click", guestIncrement1);
document.getElementById("guestbutton2").addEventListener("click", guestIncrement2);
document.getElementById("guestbutton3").addEventListener("click", guestIncrement3);

/* Add on-click event for reset buttons*/

document.getElementById("homeresetbutton").addEventListener("click", homereset);
document.getElementById("guestresetbutton").addEventListener("click", guestreset);

/* Increment functions for on-click event for all score buttons */

function homeIncrement1(){
    /* Increment event   */
    homeCount++;
    /* Add score to HTML */
    homeScore.innerText = homeCount;
}

function homeIncrement2(){
    /* Increment event   */
    homeCount += 2;
    /* Add score to HTML */
    homeScore.innerText = homeCount;
}

function homeIncrement3(){
    /* Increment event   */
    homeCount += 3;
    /* Add score to HTML */
    homeScore.innerText = homeCount;
}

function guestIncrement1(){
    /* Increment event   */
    guestCount++;
    /* Add score to HTML */
    guestScore.innerText = guestCount;
}

function guestIncrement2(){
    /* Increment event   */
    guestCount += 2;
    /* Add score to HTML */
    guestScore.innerText = guestCount;
}

function guestIncrement3(){
    /* Increment event   */
    guestCount += 3;
    /* Add score to HTML */
    guestScore.innerText = guestCount;
}

/* Increment functions for on-click event for reset buttons */

function homereset(){
    /* Reset score to 0   */
    homeCount = 0;
    /* Add score to HTML */
    homeScore.innerText = homeCount;
}


function guestreset(){
    /* Reset score to 0   */
    guestCount = 0;
    /* Add score to HTML */
    guestScore.innerText = guestCount;
}