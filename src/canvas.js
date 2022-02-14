const canvasContainer = document.createElement("div");
canvasContainer.setAttribute("id", "container");
document.body.appendChild(canvasContainer);
const canvas = document.createElement("canvas");
const canvasW = (canvas.width = 400);
const canvasH = (canvas.height = 400);
canvas.innerHTML = "Your browser does not seem to support HTML5 canvas.";
canvasContainer.appendChild(canvas);
