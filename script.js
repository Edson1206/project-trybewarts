function emailValidaction() {
    const email = document.querySelector('#email');
    if (email.value === 'tryber@teste.com') {
      return true;
    }
    return false;
  }
  
  function passwordValidation() {
    const password = document.querySelector('#password');
    if (password.value === '123456') {
      return true;
    }
    return false;
  }
  
  function submit() {
    if (emailValidaction === true && passwordValidation === true) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos');
    }
  }
  
  // window.onload = function () {
  //   const submitBtn = document.querySelector('submit-button');
  //   submitBtn.addEventListener('click', submit);
  // };