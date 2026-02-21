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
