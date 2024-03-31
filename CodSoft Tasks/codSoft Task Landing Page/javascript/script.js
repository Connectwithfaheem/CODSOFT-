document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");
  let index = 0;
  function showSlide(n) {
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[n].style.display = "block";
  }
  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
    updateDots();
  }
  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
    updateDots();
  }
  function goToSlide(n) {
    index = n;
    showSlide(index);
    updateDots();
  }
  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
  slides.forEach((slide, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  showSlide(index); //
  const interval = setInterval(nextSlide, 1000);
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  prevBtn.addEventListener("click", () => {
    clearInterval(interval);
    prevSlide();
  });
  nextBtn.addEventListener("click", () => {
    clearInterval(interval);
    nextSlide();
  });

});

const bars = document.querySelector("#Bars");
const close1 = document.querySelector("#close");
const header2 = document.querySelector(".header2");

bars.addEventListener("click", () => {
  header2.style.top = "0rem";
  bars.style.display = "none";
  close1.style.display = "block";
  // console.log("Hello");
});
close1.addEventListener("click", () => {
  header2.style.top = "-100rem";
  bars.style.display = "block";
  close1.style.display = "none";
  // console.log("Hello");
});