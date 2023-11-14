const authBtn = document.querySelector('.registration');
const inputs = document.querySelectorAll('.form-control');
const authValidation = document.querySelector('.validation');

authBtn.addEventListener('click', () => {
  const errorClass = 'border-danger';
  let validation = true;

  inputs.forEach(input => {
    if (!input.value) {
      input.classList.add(errorClass);
      validation = false;

      input.addEventListener('change', () => input.classList.remove(errorClass));
    }
  });

  if (validation) {
    const [email, username, password] = inputs;

    fetch('../../php/api/Auth/Registration.php', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        username: username.value,
        password: password.value,
      }),
    })
      .then(res => {
        if (res.status === 200) {
          alert('Вы успешно зарегистрировались! Закройте, это окно, чтобы перейти на авторизацию')
          window.location.pathname = '/index.html';
        } else {
          authValidation.classList.add('validation_active');
        }
      })
  }
});