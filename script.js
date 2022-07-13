const btnEntrar = document.getElementById('btn-entrar');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

function validation() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    console.log('aqui dentro');
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
}

btnEntrar.addEventListener('click', validation);
