// function dragHandle(ev) { // eslint-disable-line
//
//   ev.dataTransfer.setData('text', ev.target.id);
// }
// function allowDrop(ev) {  // eslint-disable-line
//   ev.preventDefault();
//   ev.stopPropagation();
// }
// function dropHandle(ev) { // eslint-disable-line
//   ev.preventDefault();
//   ev.stopPropagation();
//   var  data = ev.dataTransfer.getData('text'); // eslint-disable-line
//   ev.target.appendChild(document.getElementById(data)); // eslint-disable-line
//   console.log('hghg');
// }
//
// function divMove(e) {
//   const div = document.getElementById('block-1');
//   div.style.position = 'absolute';
//   div.style.top = `${e.clientY}px`;
//   div.style.left = `${e.clientX}px`;
// }
//
// function mouseUp() {
//   window.removeEventListener('mousemove', divMove, true);
// }
//
// function mouseDown() {
//   window.addEventListener('mousemove', divMove, true);
// }
// function addListeners(e) {
//   document.getElementById('block-1').addEventListener('mousedown', mouseDown, false);
//   window.addEventListener('mouseup', mouseUp, true);
// }
// window.onload = addListeners();
console.log(interact);

interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: 'parent',
      endOnly: true,
      elementRect: {
        top: 0, left: 0, bottom: 1, right: 1,
      },
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend(event) {
      const textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        `moved a distance of ${
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2)}px`);
    },
  });
function dragMoveListener(event) {
  let target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform =
      target.style.transform =
        `translate(${x}px, ${y}px)`;

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;
