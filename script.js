const particleContainer = document.getElementById("particle-container");

document.addEventListener("mousemove", (e) => {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = `${e.clientX}px`;
  particle.style.top = `${e.clientY}px`;

  particleContainer.appendChild(particle);

  // Particles do not disappear
});
