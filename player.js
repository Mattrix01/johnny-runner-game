// code to draw and update the player character.
export class Player {
  constructor(game) {
    this.game = game;
    // sprite sheet dimensions for each frame
    this.width = 100;
    this.height = 91.3;
    // character positions
    this.x = 0;
    this.y = 100;
  }
  // will mvoe it around absed on user input and cycle through sprite frames
  update() {}
  // draw currently active frame, edit current co-ordinates.
  // needs context as argument to specify which canvas lement we want to draw on.
  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
