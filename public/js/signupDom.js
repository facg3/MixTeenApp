const signup = document.getElementById('signup');
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
          }
        })
        .catch(err => window.location.pathname = '/error';
);
    } else {
      alert('please write a correct password');
    }
  });
}
