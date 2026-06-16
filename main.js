// Mobile nav toggle
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

toggle.addEventListener("click", () => links.classList.toggle("open"));

// Close menu after clicking a link (mobile)
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
