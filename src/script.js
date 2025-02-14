let start = document.getElementsByClassName("start");
let scrolled = document.getElementsByClassName("scroll");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    start[0].style = "display: none;";
    start[0].style.transition = "all 5s ease-in-out";
    scrolled[0].style = "display: flex";
  } else {
    start[0].style = "display: flex;";
    scrolled[0].style = "display: none";
    scrolled[0].style.transition = "all 5s ease-in-out";
  }
});
