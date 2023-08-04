// Card options
const pricingCards = document.querySelectorAll(".pricing-card");
pricingCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Remove 'current-choice' class from all cards
    pricingCards.forEach((card) => {
      card.classList.remove("current-choice");
    });

    // Add 'current-choice' class to the clicked card
    card.classList.add("current-choice");
  });
});
