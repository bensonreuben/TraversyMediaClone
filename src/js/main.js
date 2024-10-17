var hambuger = document.getElementById("hambuger");
var close = document.getElementById("close");
var small_nav_header = document.getElementById("small_nav_header");

hambuger.addEventListener("click", () => {
  small_nav_header.classList.add("active");
});

close.addEventListener("click", () => {
  small_nav_header.classList.remove("active");
});
