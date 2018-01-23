
/* check input left */
let left = document.getElementById('left'),
  formLeft = document.getElementById('code');
left.addEventListener('input', (e) => {
  const codeLeft = left.value;
  if (codeLeft === '37') {
    left.style.background = 'green';
  } else {
    left.style.background = 'red';
  }
});
/* check input down */
let down = document.getElementById('down'),
  formDown = document.getElementById('code');
down.addEventListener('input', (e) => {
  const codeDown = down.value;
  if (codeDown === '38') {
    down.style.background = 'green';
  } else {
    down.style.background = 'red';
  }
});
/* check input right */
let right = document.getElementById('right'),
  formRight = document.getElementById('code');
right.addEventListener('input', (e) => {
  const codeRight = right.value;
  if (codeRight === '39') {
    right.style.background = 'green';
  } else {
    right.style.background = 'red';
  }
});
/* check input up */
let up = document.getElementById('up'),
  formUp = document.getElementById('code');
up.addEventListener('input', (e) => {
  const codeUp = up.value;
  if (codeUp === '40') {
    up.style.background = 'green';
  } else {
    up.style.background = 'red';
  }
});
/* function submit */
const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  let grads = 0;
  grads += leftFun(37);
  grads += upFun(40);
  grads += downFun(38);
  grads += rightFun(39);
  if (grads === 8) {
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

/* check input left true or false */
function leftFun(result) {
  let gradLeft = 0;
  if (result == parseFloat(document.game.left.value)) {
    gradLeft = 2; leftspan.innerHTML = '*';
  } else {
	      leftspan.style = 'color:red';
	      leftspan.innerHTML = '*';
	    }
  return gradLeft;
}
/* check input right true or false */
function rightFun(result) {
  let gradRight = 0;
  if (result == parseFloat(document.game.right.value)) {
	    gradRight = 2;
    rightspan.innerHTML = '*';
  } else {
	   rightspan.style = 'color:red';
	   rightspan.innerHTML = '*';
  }
  return gradRight;
}
/* check input up true or false */
function upFun(result) {
  let gradeUp = 0;
  if (result == parseFloat(document.game.up.value)) {
    gradeUp = 2;
    upspan.innerHTML = '*';
  } else {
    upspan.style = 'color:red';
    upspan.innerHTML = '*';
  }
  return gradeUp;
}
/* check input down true or false */
function downFun(result) {
  let gradeDown = 0;
  if (result == parseFloat(document.game.down.value)) {
    gradeDown = 2;
    downspan.innerHTML = '*';
  } else {
    downspan.style = 'color:red';
    downspan.innerHTML = '*';
  }
  return gradeDown;
}
