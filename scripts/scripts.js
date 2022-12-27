/******************* TABS **********************/
function openTAB(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/******************** slide show for key figures **********************/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/********************** crossfade background ***********************/

/********************** automatic pause when playing another video *****/
// Create array for player IDs
var players = [];

// +++  Determine the available player IDs +++//
for (x = 0; x < Object.keys(videojs.players).length; x++) {
  // Assign the player name to setPlayer
  var setPlayer = Object.keys(videojs.players)[x];
  // Define the ready event for the player
  videojs.getPlayer(setPlayer).ready(function() {
    // Assign this player to a variable
    myPlayer = this;
    // Assign and event listener for play event
    myPlayer.on("play", onPlay);
    // Push the player to the players array
    players.push(myPlayer);
  });
}

// +++ Handle all players' play event +++//
function onPlay(e) {
  // Determine which player the event is coming from
  var id = e.target.id;
  // Loop through the array of players
  for (var i = 0; i < players.length; i++) {
    // Get the player(s) that did not trigger the play event
    if (players[i].id() != id) {
      // Pause the other player(s)
      videojs.getPlayer(players[i].id()).pause();
    }
  }
}
