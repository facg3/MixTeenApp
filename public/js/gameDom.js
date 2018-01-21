function allowDrop(ev) {  // eslint-disable-line
  ev.preventDefault();
  ev.stopPropagation();
}
function dropHandle(ev) { // eslint-disable-line
  ev.preventDefault();
  ev.stopPropagation();
  var  data = ev.dataTransfer.getData('text'); // eslint-disable-line
  ev.target.appendChild(document.getElementById(data)); // eslint-disable-line
}
function drag(ev) { // eslint-disable-line
  ev.dataTransfer.setData('text', ev.target.id);
}

const panelButton = document.getElementById('levels'); // eslint-disable-line
panelButton.addEventListener('click', () => {
  const panel = document.querySelector('.panel'); //eslint-disable-line
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
});
