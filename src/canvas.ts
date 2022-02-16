const canvasContainer = document.createElement("div") as HTMLDivElement;
canvasContainer.setAttribute("id", "container");
document.body.appendChild(canvasContainer);
const canvas = document.createElement("canvas") as HTMLCanvasElement;
canvas.innerHTML = "Your browser does not seem to support HTML5 canvas.";
canvasContainer.appendChild(canvas);
canvas.setAttribute("id", "canvas");

const canvasW: number = (canvas.width = 300);
const canvasH: number = (canvas.height = 600);
const scaleW: number = 10;
const scaleH: number = 10;
const boardW: number = canvasW / scaleW; //30
const boardH: number = canvasH / scaleH; //60
const ctx = canvas.getContext("2d");
