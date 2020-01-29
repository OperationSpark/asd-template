/* global $, sessionStorage*/

$(document).ready(function(){
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// INITIALIZATION ///////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FPS = 60;
  var BOARD_WIDTH = $("#board").width();
  var BOARD_HEIGHT = $("#board").height();
  
  // HTML jQuery Objects
  var gameItem = {};
  gameItem.$element = $("#gameItem");

  // other game variables

  // interval variable required for stopping the update function when the game ends
  var updateInterval;

  turnOnEvents();
  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  * Called once per "interval"
  */
  function update() {
    

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  function turnOnEvents() {
    // start the interval timer
    updateInterval = setInterval(update, 1000 / FPS);

    // turn on event handlers
    $(document).on('click', handleEvent);
  }

  function turnOffEvents() {
    // stop the interval timer
    clearInterval(updateInterval);

    // turn off event handlers
    $(document).off();
  }
  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// EVENT HANDLERS //////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function handleEvent(event) {

  }
  
  


});
