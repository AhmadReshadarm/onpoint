const dots = document.querySelectorAll(".dot-container");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    dotHandler(dot.classList[1]);
  });
});

window.addEventListener("scroll", (e) => {
  let pageOffset = window.pageYOffset - 500;
  if (pageOffset < 0) {
    dots[0].classList.add("dot-active");
    dots[1].classList.remove("dot-active");
    dots[2].classList.remove("dot-active");
  } else if (pageOffset < 400) {
    dots[1].classList.add("dot-active");
    dots[0].classList.remove("dot-active");
    dots[2].classList.remove("dot-active");
  } else if (pageOffset < 1000) {
    dots[2].classList.add("dot-active");
    dots[0].classList.remove("dot-active");
    dots[1].classList.remove("dot-active");
  }
});

function dotHandler(classValue) {
  switch (classValue) {
    case "dot-1":
      dots[0].classList.add("dot-active");
      dots[1].classList.remove("dot-active");
      dots[2].classList.remove("dot-active");

      break;
    case "dot-2":
      dots[1].classList.add("dot-active");
      dots[0].classList.remove("dot-active");
      dots[2].classList.remove("dot-active");
      break;
    case "dot-3":
      dots[2].classList.add("dot-active");
      dots[0].classList.remove("dot-active");
      dots[1].classList.remove("dot-active");
      break;
    default:
      break;
  }
}

const slider = document.getElementById("slider");
const slids = document.querySelector(".slider-x-wrapper");
let touchSlider = false;
slider.addEventListener("input", () => {
  slids.scrollTo(slider.value, 0);
});

slids.addEventListener("wheel", () => {
  slidsOffSet = slids.scrollLeft;
  slider.value = slidsOffSet;
});

slids.addEventListener("touchmove", () => {
  slidsOffSet = slids.scrollLeft;

  slider.value = slidsOffSet;
});
