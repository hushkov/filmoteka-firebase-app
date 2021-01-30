const scrollToTopBtn = document.getElementById("scroll-to-top-button");

window.onscroll = function () {
  scrollFunction();
}

scrollToTopBtn.addEventListener("click", onTopFunction);

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function onTopFunction(e) {
  e.preventDefault();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}