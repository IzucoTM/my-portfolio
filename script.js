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
