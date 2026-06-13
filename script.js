document.querySelectorAll("section").forEach(section => {
  section.classList.add("reveal");
});

window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});
