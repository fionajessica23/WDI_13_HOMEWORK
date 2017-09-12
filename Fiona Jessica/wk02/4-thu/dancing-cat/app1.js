// press start button
//   cat moves to the right
//   hit right wall
//   stop
//   cat moves to the left
//   hit left wall
//   stop
//   cat moves to the right (loop)
//
// find out how cat hit right wall
// wall = window.innerWidth
// cat position = img.style.left
// need to have direction
//
// condition = if cat position equal/more to wall, then
// call stop function = clearInterval
//
//
// cat moves to the left, moving to the other direction
// moving from right to left (-10px) everystep
// condition = if cat position equal to 0 (img.style.left) = 0
// call stop function = clearInterval
//



var start = document.querySelector('#start-button');
var stop = document.querySelector('#stop-button');
var faster = document.querySelector('#faster-button');
var slower = document.querySelector('#slower-button');


var catTimerId = null;
var direction = 'right'
var speed = 10;
var maxSpeed = 50;

var catWalk = function() {
  var img = document.querySelector('img');
  var currentLeftOffset = parseInt(img.style.left);

  if (direction === 'right') {
    img.style.left = (currentLeftOffset + speed) + 'px';

    if (currentLeftOffset > (window.innerWidth - img.width)) { //578, this is to check the width of my window
      img.style.left = window.innerwidth - img.width + 'px';
      // stopCatWalk(); //wrong
      direction = 'left';
    }
  } else {
    img.style.left = (currentLeftOffset - speed) + 'px';

    if (currentLeftOffset < 0) {
      img.style.left = 0 + 'px';
      // stopCatWalk(); //wrong
      direction = "right";
    }
  }
}


var startCatWalk = function () {
  if (catTimerId !== null) {
    // already have a timer - quit this function
    return;
  }
  catTimerId = setInterval(catWalk, 100); //calling catWalk function every 100ms and store the "receipt id" in catTimerId
}


var stopCatWalk = function () {
  clearInterval(catTimerId)
  catTimerId = null;
}


var addingSpeed = function () {
  if (speed <= maxSpeed) { // max-speed is 50, more than this will not accelerate further
    speed += 10;
  }
}


var lowerSpeed = function () {
  if (speed > 10) {
    speed -= 10;
  }
}


start.addEventListener('click', startCatWalk);
stop.addEventListener('click', stopCatWalk);
faster.addEventListener('click', addingSpeed);
slower.addEventListener('click', lowerSpeed);
