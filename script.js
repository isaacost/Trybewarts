const btnEntrar = document.getElementById('btn-entrar');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const input = document.getElementById('agreement');
const button = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');

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

function contador() {
  let counter = 500;
  for (let i = 0; i < textarea.value.length; i += 1) {
    counter -= 1;
  }
  document.getElementById('counter').innerHTML = counter;
}

input.addEventListener('change', disabledButton);
btnEntrar.addEventListener('click', validation);
textarea.addEventListener('keyup', contador);

const name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.querySelector('input[name = "family"]:checked');
const content = document.querySelector('input[name = "content"]:checked');
const avaluation = document.querySelector('input[name = "rate"]:checked');

function getData() {
  const objeto = [
    { question: 'Nome completo', answer: `${name.value} ${lastName.value}` },
    { question: 'E-mail', answer: emailForm.value },
    { question: 'Casa', answer: house.value },
    { question: 'Família', answer: family.innerText },
    { question: 'Quer aprender:', answer: content.innerText },
    { question: 'Avaliação', answer: avaluation.innerText },
  ];

  console.log(objeto);
}

button.addEventListener('click', getData);
