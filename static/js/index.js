const links = document.querySelectorAll(".nav_link");
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => {
        link.classList.remove("active");

        const activeLink = document.querySelector(
          `a[href="#${entry.target.id}"]`
        );
        activeLink.classList.add("active");
      });
    }
  });
}, {threshold:0.5});

sections.forEach(section => {
    observer.observe(section)
})

links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar__nav.classList.toggle("nav-active");
  });
});

menu.addEventListener("click", () => {
  navbar__nav.classList.toggle("nav-active");
});

window.addEventListener("load", () => {
  logo.classList.add("animate");
  logo.addEventListener(
    "animationend",
    () => {
      logo.classList.remove("animate");
    },
    { once: true }
  );

  logo.addEventListener("click", () => {
    logo.classList.add("animate");
    logo.addEventListener(
      "animationend",
      () => {
        logo.classList.remove("animate");
      },
      { once: true }
    );
  });
});
