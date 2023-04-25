// code runs after all assets in html are loaded.
window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  // keep 500 as background images optimised for this height.
  canvas.height = 500;
});
