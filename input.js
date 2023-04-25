// script to capture and keep track of user input

export class InputHandler {
  constructor() {
    // adding keys that are pressed down inot this array and removing ones being released.
    // contains all currently active keys
    this.keys = [];
    // event listeners return auto generated event object which contains info about the event.
    // the property that holds the event is called 'key'
    window.addEventListener("keydown", (e) => {
      // so only certain keys can be used in array and only once if pressed mutiple times. Only push inside with these conditions.
      if (
        (e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key === "Enter") &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      }
      console.log(e.key, this.keys);
    });
    // for key up event
    window.addEventListener("keyup", (e) => {
      // if e.key is arrow down, use splice emthod to remove from keys array.
      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Enter"
      ) {
        // splice takes 2 arguments, index of the element we want to remove and how many element to remove there.
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
      console.log(e.key, this.keys);
    });
  }
}
