const signup = document.getElementById('signup');
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

if (signup) {
  signup.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const cfPassword = document.getElementById('cf_password');
    if (password.value === cfPassword.value) {
      const user = {
        username: username.value,
        email: email.value,
        password: password.value,
      };
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(user),
      }).then(res => res.json())
        .then((data) => {
          if (data.success) {
            window.location.pathname = '/';
          } else {
            genErrorMessage(data.details[0].message);
          }
        })
        .catch((err) => {
          window.location.pathname = '/error';
        });
    } else {
      genErrorMessage('please write a correct password');
    }
  });
}
