// Enemies our player must avoid
var Enemy = function() {
  this.x = 0;
  this.y = Math.random() * 200 + 50;
  this.speed = Math.random() * 100 + 40;

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.+ this.speed  player = new Player();
    this.x = this.x + this.speed * dt;
    if (this.x >= 505) {
        this.x = 0;}
        if (player.y + 131 >= this.y + 90 &&
       player.y + 73 <= this.y + 135 &&
       player.x + 25 <= this.x + 88 &&
       player.x + 76 >= this.x + 11)
        player = new Player();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{

constructor(){
  this.x = 202.5;
  this.y = 383;
  this.sprite = 'images/char-boy.png';
  console.log("Player1");
}
update(){

  }

render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

  }
  handleInput(keys){
    switch(keys) {
 case "up":
     if (this.y >= 60) {
         this.y = this.y - 80;
  checkwin();
     }
     break;
 case "down":
     if (this.y < 340) {
         this.y = this.y + 80;
     }
     break;
     case "left":
         if (this.x > 2.5) {
             this.x = this.x - 100;
         }
         break;
 case "right":
     if (this.x < 400) {
         this.x = this.x + 100;

     }
     break;
 }

  }
}
var allEnemies = [];
var player = new Player();
const Win = document.querySelector(".win");
var flag = false ;

function checkwin(){
  if (player.y <= -17){setTimeout(function(){
  Win.innerHTML= 'Congratulations you made it!';
  flag = true;
 Clear();}
  ,100);
  }
  }


function Clear(){
  if(flag){setTimeout(function(){
  Win.innerHTML='';
  flag = false;
  player = new Player();
}
, 2000);

}}
// Now instantiate your objects.
// Place the player object in a variable called player

// Place all enemy objects in an array called allEnemies
for (var i = 0; i < 5 ; i++) {
  allEnemies.push(new Enemy());
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
