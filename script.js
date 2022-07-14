const btnEntrar = document.getElementById('btn-entrar');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const input = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

function validation() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
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

const textarea = document.getElementById('textarea');

function contador() {
  let counter = 500;
  for (let i = 0; i < textarea.value.length; i += 1) {
    counter -= 1;
  }
  document.getElementById('counter').innerHTML = counter;
}
contador();
input.addEventListener('change', disabledButton);
btnEntrar.addEventListener('click', validation);
