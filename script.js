// Add a little animation when page loads
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "opacity 0.8s ease";
      card.style.opacity = 1;
    }, i * 200);
  });
});

