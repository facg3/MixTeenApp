
function dragHandle(ev) { // eslint-disable-line
  ev.dataTransfer.setData('text', ev.target.id);
}
function allowDrop(ev) {  // eslint-disable-line
  ev.preventDefault();
}
function dropHandle(ev) { // eslint-disable-line
  ev.preventDefault();
  var  data = ev.dataTransfer.getData('text'); // eslint-disable-line
  ev.target.appendChild(document.getElementById(data)); // eslint-disable-line
  console.log('hghg');
}
