const btnEntrar = document.getElementById('btn-entrar');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const input = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

function validation() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    console.log('aqui dentro');
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
}

function disabledButton() {
  if (input.value === '') {
    button.disabled = true;
  }
  button.disabled = false;
}

input.addEventListener('change', disabledButton);
btnEntrar.addEventListener('click', validation);
