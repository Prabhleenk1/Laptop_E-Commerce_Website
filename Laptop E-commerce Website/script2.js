const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const flipButton = card.querySelector('.rainbow-hover');

  flipButton.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});