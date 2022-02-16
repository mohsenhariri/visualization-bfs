import "./assets/styles/style.css";
import trex from "./assets/trex.jpg";
import "./canvas";

const img = document.createElement("img");
document.body.appendChild(img);

window.onload = () => {
  img.src = trex;
};
