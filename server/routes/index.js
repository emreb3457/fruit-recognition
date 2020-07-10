var express = require('express');
var router = express.Router();
require('events').EventEmitter.prototype._maxListeners = 100;
const {Board, Motor,Servo  } = require("johnny-five");
var deger;
var board = new Board();
/* GET home page. */

board.on("ready", () => {
  const servo = new Servo(8);
  board.pinMode(10, board.MODES.INPUT);
  board.loop(2000, () => {
    board.digitalRead(10, function(value){
      deger = value;
  });
    console.log(deger);
  });
  servo.to(10);
});
router.post('/:hiz', function(req, res, next) {
  const {key}=req.body;
  res.json("Bitirme Projesi");
  console.log(key);
  const servo = new Servo(8);
  const motor = new Motor({
    pins: {
      pwm: 3,
      dir: 5,
      cdir: 4
    }
  });
  
  if(deger==0)
  {
    servo.to(60);
    setTimeout(()=>servo.to(10),3000);
    
    
  }
  

    motor.forward(255);
  
  if (key!=0){
    servo.to(10);
  }
});

module.exports = router;
