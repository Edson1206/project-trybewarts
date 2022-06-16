const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('email');
  const senha = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const formButton = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
agreement.addEventListener('change', (event) => {
  event.preventDefault();
  formButton.disabled = !agreement.checked;
});
