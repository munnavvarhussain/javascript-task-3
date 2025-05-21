// Dropdown listener
document.getElementById("dropdown").addEventListener("change", function() {
  alert("You selected: " + this.value);
});

// Modal functionality
const modal = document.getElementById("modal");
document.getElementById("openModal").onclick = function() {
  modal.style.display = "block";
};
document.getElementById("closeModal").onclick = function() {
  modal.style.display = "none";
};

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    alert("Name is required.");
  } else {
    alert("Form submitted successfully!");
  }
});
document.getElementById("openModal").onclick = function () {
  modal.classList.remove("hide");
  modal.classList.add("show");
};

document.getElementById("closeModal").onclick = function () {
  modal.classList.remove("show");
  modal.classList.add("hide");
  setTimeout(() => modal.style.display = "none", 400); // Hide after animation
};
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    alert("Name is required.");
  } else {
    localStorage.setItem("userName", name); // Save to localStorage
    alert("Hello, " + name + "! Your data has been saved.");
  }
});
window.onload = function () {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    document.getElementById("name").value = savedName;
  }
};
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});
// Scroll-triggered animation
function revealOnScroll() {
  const section = document.querySelector('.animated-section');
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    section.classList.add('visible');
  }
}

// Run on scroll and on load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
