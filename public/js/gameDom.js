
/* check input left */
let left = document.getElementById('left'),
  form = document.getElementById('QZ');


left.addEventListener('input', (e) => {
  const num = left.value;
  if (num === '37') {
    left.style.background = 'green';
  } else {
    left.style.background = 'red';
  }
});
/* check input down */
let down = document.getElementById('down'),
  formDown = document.getElementById('QZ');


down.addEventListener('input', (e) => {
  const num = down.value;
  if (num === '38') {
    down.style.background = 'green';
  } else {
    down.style.background = 'red';
  }
});
/* check input right */
let right = document.getElementById('right'),
  formRight = document.getElementById('QZ');


right.addEventListener('input', (e) => {
  const num = right.value;
  if (num === '39') {
    right.style.background = 'green';
  } else {
    right.style.background = 'red';
  }
});
/* check input up */
let up = document.getElementById('up'),
  formUp = document.getElementById('QZ');


up.addEventListener('input', (e) => {
  const num = up.value;
  if (num === '40') {
    up.style.background = 'green';
  } else {
    up.style.background = 'red';
  }
});
/* function submit */
const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  let grd = 0;
  grd += leftFun(37);
  grd += upFun(40);
  grd += downFun(38);
  grd += rightFun(39);
  if (grd === 8) {
    alert('Yes');
    const play = document.getElementById('play');
    const screen = document.getElementById('myCanvas');
    play.addEventListener('click', () => {
      screen.style.visibility = 'visible';
    });
  } else {
    alert('No');
    const play = document.getElementById('play');
    const screen = document.getElementById('myCanvas');
    play.addEventListener('click', () => {
      alert('try');
    });
  }
});
// const play = document.getElementById('play');
// const screen = document.getElementById('myCanvas');
// play.addEventListener('click', () => {
//   screen.style.visibility = 'visible';
// });

// function Assessment() {
//   let grd = 0;
//   grd += leftFun(37);
//   grd += upFun(40);
//   grd += downFun(38);
//   grd += rightFun(39);
// }
function leftFun(rsl) {
  let g = 0;
  if (rsl == parseFloat(document.game.left.value)) {
    g = 2; leftspan.innerHTML = '*';
  } else {
	      leftspan.style = 'color:red';
	      leftspan.innerHTML = '*';
	    }
  return g;
}
function rightFun(rsl) {
  let g = 0;
  if (rsl == parseFloat(document.game.right.value)) {
	    g = 2;
    rightspan.innerHTML = '*';
  } else {
	   rightspan.style = 'color:red';
	   rightspan.innerHTML = '*';
  }
  return g;
}
function upFun(rsl) {
  let g = 0;
  if (rsl == parseFloat(document.game.up.value)) {
    g = 2;
    upspan.innerHTML = '*';
  } else {
    upspan.style = 'color:red';
    upspan.innerHTML = '*';
  }
  return g;
}

function downFun(rsl) {
  let g = 0;
  if (rsl == parseFloat(document.game.down.value)) {
    g = 2;
    downspan.innerHTML = '*';
  } else {
    downspan.style = 'color:red';
    downspan.innerHTML = '*';
  }
  return g;
}
function resetFun() {
  location.reload();
}
