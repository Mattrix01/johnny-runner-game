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
    // vertical speed below
    this.vy = 0;
    // pointing to image element
    this.image = document.getElementById("player");
    this.speed = 0;
    // its speed in pixels per frame
    this.maxSpeed = 10;
  }
  // will move it around based on user input and cycle through sprite frames
  update(input) {
    // horizontal movement for every frame
    // increasing players horizontal x position by its current speed
    this.x += this.speed;

    // for updating player class depending on keys pressed
    if (input.includes("ArrowRight")) this.speed = this.maxSpeed;
    else if (input.includes("ArrowLeft")) this.speed = -this.maxSpeed;
    // if input array deosnt include arrow right or left, stop horizontal movement
    else this.speed = 0;
    // stop player from leaving canvas boundreis edge
    if (this.x < 0) this.x = 0;
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;
    // vertical movement
    // for every animation frame add the current vertical velocity to players vertical y position
    this.y += this.vy;
    if (input.includes("ArrowUp") && this.onGround()) this.vy -= 10;
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
  // check if player is standing on ground or in air using small utility mehtod
  onGround() {
    return this.y >= this.game.height - this.height;
  }
}
