// importing exported classes to use in main game script.
import { Player } from "./player.js";
import { InputHandler } from "./input.js";

// code runs after all assets in html are loaded.
window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  // keep 500 as background images optimised for this height.
  canvas.height = 500;

  // Main brain for project in here
  class Game {
    constructor(width, height) {
      // converted argument width and height into class properties
      this.width = width;
      this.height = height;
      // because we imported player class we can use it here.
      // inside new player (this) keyword means this game object we are in (Game)
      // We can also use its draw method we created in player.js
      this.player = new Player(this);
      // so we can use input.js in class
      this.input = new InputHandler();
    }
    // update method will run for every animation frame and trigger all calculations that need to happen
    update() {
      this.player.update();
    }
    //draw method will draw all images and score etc.
    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  console.log(game);

  // creating animation loop
  function animate() {
    // clear canvas paint stop trail.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate();
});
