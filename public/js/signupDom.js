const signup = document.getElementById('signup');
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
        password: username.value,
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
            checkdiv(data.message);
          }
        })
        .catch((err) => {
          if (err) {
            window.location.pathname = '/error';
          }
        });
    } else {
      checkdiv('please write a correct password');
    }
  });
}
