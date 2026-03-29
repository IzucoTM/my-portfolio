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
const about = document.getElementById("aboutt");
const services = document.getElementById("services");
const skills = document.getElementById("skills");
const project = document.getElementById("projects");
const hire = document.getElementById("hire-me");

cancel.addEventListener("click", function () {
  navItem.style.transform = "translateX(100%)";
  cancel.style.display = "none";
  cancel.style.zIndex = "999";
});

menu.addEventListener("click", function () {
  navItem.style.transform = "translateX(0)";
  cancel.style.display = "block";
  cancel.style.zIndex = "999";
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "2349123645519"; // CHANGE THIS

    const whatsappMessage = `Hello, my name is ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    form.requestFullscreen();

    window.location.href = url;
  });
});
