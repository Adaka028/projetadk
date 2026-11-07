// pour l'apparition des images
const obs = new IntersectionObserver((e) =>
  e.forEach((x) => x.isIntersecting && x.target.classList.add("active")),
);
document.querySelectorAll(".reveal").forEach((x) => obs.observe(x));

// pour le faq

document
  .querySelectorAll(".question")
  .forEach((q) => (q.onclick = () => q.classList.toggle("passive")));
