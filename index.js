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

slider.addEventListener("input", () => {
  slids.scrollTo(slider.value, 0);
});

slidsOffSet = slids.scrollLeft;
slids.addEventListener("wheel", () => {
  slider.value = slidsOffSet;
});

slids.addEventListener("touchmove", () => {
  slider.value = slidsOffSet;
});
window.addEventListener("change", () => {
  if (window.innerWidth < 1025) {
    slider.max = 1500;
    if (window.innerWidth < 450) {
      slider.max = 800;
    }
  }
});
if (window.innerWidth < 1025) {
  slider.max = 1500;
  if (window.innerWidth < 450) {
    slider.max = 800;
  }
}
