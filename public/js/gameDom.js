const panelButton = document.getElementById('levels');
panelButton.addEventListener('click', () => {
  const panel = document.querySelector('.panel');
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
});
/* check input left */
const left = document.getElementById('left');
const formLeft = document.getElementById('code');
left.addEventListener('input', (e) => {
  const codeLeft = left.value;
  if (codeLeft === '37') {
    left.style.background = 'green';
  } else {
    left.style.background = 'red';
  }
});
/* check input down */
const down = document.getElementById('down');
const formDown = document.getElementById('code');
down.addEventListener('input', (e) => {
  const codeDown = down.value;
  if (codeDown === '38') {
    down.style.background = 'green';
  } else {
    down.style.background = 'red';
  }
});
/* start game when finish code */
const playGame = document.getElementById('play-game');
playGame.addEventListener('click', () => {
  const exitPop = document.getElementById('pop-up');
  exitPop.style.visibility = 'hidden';
  const screenGame = document.getElementById('myCanvas');
  screenGame.style.visibility = 'visible';
});
/* check input right */
const right = document.getElementById('right');
const formRight = document.getElementById('code');
right.addEventListener('input', (e) => {
  const codeRight = right.value;
  if (codeRight === '39') {
    right.style.background = 'green';
  } else {
    right.style.background = 'red';
  }
});
/* check input up */
const up = document.getElementById('up');
const formUp = document.getElementById('code');
up.addEventListener('input', (e) => {
  const codeUp = up.value;
  if (codeUp === '40') {
    up.style.background = 'green';
  } else {
    up.style.background = 'red';
  }
});
/* when click submit check grade */
const submit = document.getElementById('submit');
let grads = 0;
submit.addEventListener('click', () => {
  grads += leftFun(37);
  grads += upFun(40);
  grads += downFun(38);
  grads += rightFun(39);
  if (grads === 8) {
    const congrate = document.getElementById('pop-up');
    congrate.style.visibility = 'visible';
  } else {
    const tryAgain = document.getElementById('pop-down');
    tryAgain.style.visibility = 'visible';
  }
});
/* show game with click play */
const play = document.getElementById('play');
const screen = document.getElementById('myCanvas');
play.addEventListener('click', () => {
  const Again = document.getElementById('pop-start');
  Again.style.visibility = 'visible';
});

//  else {
//   const Again = document.getElementById('pop-start');
//   Again.style.visibility = 'visible';
// }
// });
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
