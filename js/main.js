document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mousedown", function () {
    card.classList.add("dragging");
  });

  card.addEventListener("mouseup", function () {
    card.classList.remove("dragging");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const circle = entry.target.querySelector("circle:last-child");
          const percent =
            entry.target.querySelector(".skill-level span").textContent;
          const dashOffset = 251 - (251 * parseInt(percent)) / 100;
          circle.style.strokeDashoffset = dashOffset;
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the skill card is visible
    }
  );

  skillCards.forEach((card) => {
    observer.observe(card);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll("#navbar a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        pageYOffset >= sectionTop - 50 &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navbarLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const hamburger = document.querySelector(".hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
