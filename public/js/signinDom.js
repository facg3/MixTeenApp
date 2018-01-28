const signIn = document.getElementById('sign_in');
const genErrorBlock = (validateMessage) => {
  const node = document.createTextNode(validateMessage);
  const div = document.createElement('div');
  div.classList.add('valid');
  div.appendChild(node);
  const container = document.querySelector('form');
  container.appendChild(div);
};

const genErrorMessage = (validationError) => {
  if (document.querySelector('.valid')) {
    document.querySelector('.valid').remove();
    genErrorBlock(validationError);
  } else {
    genErrorBlock(validationError);
  }
};
if (signIn) {
  signIn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const user = {
      username: username.value,
      password: password.value,
    };
    fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.success) {
          window.location.pathname = '/game';
        } else {
          genErrorMessage(data.details[0].message);
        }
      })
      .catch((err) => {
        window.location.pathname = '/error';
      });
  });
}
