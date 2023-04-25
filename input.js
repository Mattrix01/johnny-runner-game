// script to capture and keep track of user input

export class InputHandler {
  constructor() {
    // adding keys that are pressed down inot this array and removing ones being released.
    this.keys = [];
    // event listeners return auto generated event object which contains info about the event.
    // the property that holds the event is called 'key'
    window.addEventListener("keydown", (e) => {
      console.log(e.key, this.keys);
      // so only certain keys can be used in array and only once if pressed mutiple times.
      if (e.key === "ArrowDown" && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }
    });
  }
}
