const main = document.getElementById('main');
const form = document.querySelector('#evaluation-form');
const formButton = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const describe = document.querySelector('#textarea');
const count = document.querySelector('#counter');
const submitButton = document.querySelector('.submit-button');
const element = document.createElement('form');
const trybewartsFormLogo = document.getElementById('trybewarts-forms-logo');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('change', (event) => {
  event.preventDefault();
  formButton.disabled = !agreement.checked;
});

describe.addEventListener('input', (event) => {
  const maxText = 500;
  const textArea = describe.value.length;
  const rest = maxText - textArea;
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

function getChecked() {
  return [...document.querySelectorAll('input[class="subject"]:checked')]
    .map((input) => input.value)
    .join(', ');
}

function showAfterSubmit(event) {
  event.preventDefault();
  const selected = getChecked();
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const house = document.querySelector('#house').value;
  const mail = document.querySelector('#input-email').value;
  const family = document.querySelector('input[name ="family"]:checked').value;
  const rank = document.querySelector('input[name ="rate"]:checked').value;
  const text = describe.value;
  form.style.display = 'none';
  element.id = 'form-data';
  main.appendChild(element);
  main.insertBefore(element, trybewartsFormLogo);
  element.innerHTML = `<p>Nome: ${name} ${lastName}</p><p>Email: ${mail}</p>
        <p>Casa: ${house}</p><p>Família: ${family}</p>
        <p>Matérias: ${selected}</p><p>Avaliação: ${rank}</p>
        <p>Observações: ${text}</p>`;
}

formButton.addEventListener('click', showAfterSubmit);
