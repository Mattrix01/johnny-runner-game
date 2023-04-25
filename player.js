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
    // pointing to image element
    this.image = document.getElementById("player");
  }
  // will move it around based on user input and cycle through sprite frames
  update(input) {
    // for updating player class depending on keys pressed
    if (input.includes("ArrowRight")) this.x++;
    else if (input.includes("ArrowLeft")) this.x--;
  }
  // draw currently active frame, edit current co-ordinates.
  // needs context as argument to specify which canvas lement we want to draw on.
  draw(context) {
    // Passing areguments in draw image (image we wasnt to draw, source x,y,height,width of position on image we want to crop out, destination x, y, height and width where on canvas we want to draw that cropped out image)
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
