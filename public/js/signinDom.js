const signIn = document.getElementById('sign_in');
const validate = function (data) {
  const div = document.createElement('div');
  div.classList.add('valid');
  const node = document.createTextNode(data);
  div.appendChild(node);
  const container = document.getElementById('sp_form');
  container.insertBefore(div, container.firstChild);
};
const checkdiv = function (data) {
  if (document.querySelector('.valid')) {
    document.querySelector('.valid').remove();
    validate(data);
  } else {
    validate(data);
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
          console.log(data.message);
          checkdiv(data.message);
        }
      })
      .catch((err) => {
        window.location.pathname = '/error';
      });
  });
}
