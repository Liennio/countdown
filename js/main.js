// Set the date we're counting down to
var countDownDate = new Date("November 29, 2020 20:00:00").getTime();

var colors = [
    '#46dbad',
    '#4d454f',
    '#0abab5',
    '#9a947c',
    '#440824',
    '#202000',
    '#202000',
    '#82b1ad',
    '#ff4040',
    '#ff7f50',
    '#f20b34',
    '#1a472a',
    '#2a623d',
    '#536878',
    '#6e7f80',
    '#1b85b8',
    '#559e83',
    '#41533b',
    '#78866b',
    '#738678',
    '#c0c2ce',
    '#ff5252',
    '#a70000',
    '#0086ad',
];

console.log(colors)

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }

  if (days == 20) {
    document.getElementById("bericht").innerHTML = "Only 20 days left!";
  }
  if (days == 10) {
    document.getElementById("bericht").innerHTML = "Only 10 days left!";
  }

  if (days == 5) {
    document.getElementById("bericht").innerHTML = "Only 5 days left!";
  }
  
  if (days == 1) {
    document.getElementById("bericht").innerHTML = "We're back tomorrow!";
  }

  document.body.style.backgroundColor = colors[hours];
  


}, 1000);