let triangle = document.getElementsByClassName("triangle")[0];
let bars = document.getElementsByClassName("bar");

let pauseAndPlay = () => {
  triangle.classList.toggle("play");
  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.toggle("open");
  }
};

triangle.onclick = pauseAndPlay;
