const signIn = document.getElementById('sign_in');
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
        }
      })
      .catch(err => console.log(err));
  });
}
