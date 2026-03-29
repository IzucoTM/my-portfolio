const btn = document.getElementById("toggleBtn");
const container = document.getElementById("textContainer");

btn.addEventListener("click", () => {
  container.classList.toggle("expanded");

  // Change button text
  if (container.classList.contains("expanded")) {
    btn.textContent = "Read Less";
  } else {
    btn.textContent = "Read More";
  }
});

const form = document.querySelector("form");
const modal = document.getElementById("successModal");
const closeBtn = document.getElementById("closeModal");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  modal.classList.add("active");
  form.reset(); // clear form
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el) => observer.observe(el));

const navItem = document.getElementById("nav-items");
const menu = document.getElementById("nav-menu");
const cancel = document.getElementById("cancel");
const home = document.getElementById("home");
const about = document.getElementById("about");
const services = document.getElementById("services");
const skills = document.getElementById("skill");
const project = document.getElementById("project");
const hire = document.getElementById("hire-me");

cancel.addEventListener("click", function () {
  navItem.style.transform = "translateY(100%)";
  cancel.style.display = "none";
  cancel.style.zIndex = "999";
});

menu.addEventListener("click", function () {
  navItem.style.transform = "translateY(0)";
  cancel.style.display = "block";
  // menu.style.display = "none";
  cancel.style.zIndex = "999";
});
