const panelButton = document.getElementById('levels');
panelButton.addEventListener('click', () => {
  const panel = document.querySelector('.panel');
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
});
