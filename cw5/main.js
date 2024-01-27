const slider = document.getElementById("slider");
const arrLeft = document.getElementById("arrow-left");
const arrRight = document.getElementById("arrow-right");

let currentSlide = 1;

const changeSlide = (type) => {
  if (type === "right") {
    if (currentSlide < 10) {
      currentSlide++;
      slider.src = `./img/img${currentSlide}.png`;
    } else {
      currentSlide = 1;
      slider.src = `./img/img1.png`;
    }
  } else {
    if (currentSlide > 1) {
      currentSlide--;
      slider.src = `./img/img${currentSlide}.png`;
    } else {
      currentSlide = 10;
      slider.src = `./img/img10.png`;
    }
  }
};

arrLeft.addEventListener("click", () => {
  changeSlide("left");
});

arrRight.addEventListener("click", () => {
  changeSlide("right");
});
