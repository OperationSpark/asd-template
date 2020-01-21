/* global $, sessionStorage*/

////////////////////////////////////////////////////////////////////////////////
///////////////////////// INITIALIZATION ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Constant Variables
var FPS = 60;
var KEYS = {
  "LEFT" : 37,
  "UP": 38,
  "RIGHT": 39,
  "DOWN": 40
};

// HTML jQuery Objects
var $board = $('#board');
var $scoreElement = $('#score');

// game variables
var score = 0;

// interval variable required for stopping the update function when the game ends
var updateInterval;

// variable to keep track of the key (keycode) last pressed by the user
var activeKey;
var keysDown;

// start the game
startGame();

////////////////////////////////////////////////////////////////////////////////
///////////////////////// CORE LOGIC ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function startGame() {
  // empty the keysDown Object
  keysDown = {};
  
  // turn on keyboard inputs
  $('body').on('keydown', handleKeyDown);

  // start the interval timer
  updateInterval = setInterval(update, 1000 / FPS);
}

/* 
 * Called once per "Interval"
 */
function update() {
  
}

function endGame() {
  // turn off keyboard
  $('body').off();

  // stop the interval timer
  clearInterval(updateInterval);
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/* 
  event.which returns the keycode of the key that is pressed when the
  keydown event occurs
  
  The KEY Object creates a map for the Arrow Keys to their keycode:

    KEY.LEFT = 37
    KEY.UP = 38
    KEY.RIGHT = 39
    KEY.DOWN = 40
  */
function handleKeyDown(event) {
  activeKey = event.which;
  console.log(activeKey);

  keysDown[activeKey] = true;
}
