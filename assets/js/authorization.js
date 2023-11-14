const authBtn = document.querySelector('.authorization');
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
    const [username, password] = inputs;

    fetch('../../php/api/Auth/Login.php', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.auth) {
          alert('Авторизация прошла успешно! Закройте, это окно, чтобы перейти к объявлениям');
          window.location.pathname = '/adverts.html';
        } else {
          authValidation.classList.add('validation_active');
        }
      })
      .catch(error => {
        authValidation.classList.add('validation_active');
      })
  }
});