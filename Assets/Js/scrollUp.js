const backToTopButton = document.getElementById("BackToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});
