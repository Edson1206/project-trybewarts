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

const desc = document.querySelector('#textarea');
desc.addEventListener('input', (event) => {
  const maxText = 500;
  const textArea = desc.value.length;
  const rest = maxText - textArea;
  const count = document.querySelector('#counter');
  count.innerText = `Caracteres restantes: ${rest}`;
  if (textArea >= maxText) {
    event.preventDefault();
  }
  if (textArea > 470) {
    count.setAttribute('style', 'color: red');
  } else {
    count.setAttribute('style', 'color: black');
  }
});
