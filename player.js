// code to draw and update the player character.
export class Player {
  constructor(game) {
    this.game = game;
    // sprite sheet dimensions for each frame
    this.width = 100;
    this.height = 91.3;
    // character positions
    this.x = 0;
    // this.height on y co-ordinate to position on bottom of canvas.
    this.y = this.game.height - this.height;
  }
  // will mvoe it around absed on user input and cycle through sprite frames
  update() {}
  // draw currently active frame, edit current co-ordinates.
  // needs context as argument to specify which canvas lement we want to draw on.
  draw(context) {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage();
  }
}
