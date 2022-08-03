const btnEntrar = document.getElementById('btn-entrar');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const input = document.getElementById('agreement');
const button = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const feedbackArea = document.getElementById('feedback-area');
const formDataArea = document.getElementById('form-data');
const formPageArea = document.getElementById('main-form');

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

function createElement(question, answer) {
  const element = document.createElement('li');
  element.innerHTML = `<strong>${question}:</strong> 
  <span>${answer}</span>`;
  return element;
}

function deleteForm() {
  feedbackArea.classList.remove('hidden');
  formPageArea.classList.add('hidden');
}

function newPage(formData) {
  deleteForm();
  for (let i = 0; i < formData.length; i += 1) {
    const { question, answer } = formData[i];
    const newElement = createElement(question, answer);
    formDataArea.appendChild(newElement);
  }
}
const name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const house = document.getElementById('house');
function getContent() {
  const content = document.querySelectorAll('input[name = "content"]:checked');
  const arr = [];
  for (let i = 0; i < content.length; i += 1) {
    arr.push(content[i].value);
  }
  return arr.join(', ');
}

function getData(e) {
  e.preventDefault();
  const text = document.getElementById('textarea');
  const family = document.querySelector('input[name = "family"]:checked').value;
  const content = getContent();
  const avaluation = document.querySelector('input[name = "rate"]:checked').value;
  const objeto = [
    { question: 'Nome', answer: `${name.value} ${lastName.value}` },
    { question: 'Email', answer: emailForm.value },
    { question: 'Casa', answer: house.value },
    { question: 'Família', answer: family },
    { question: 'Matérias', answer: content },
    { question: 'Avaliação', answer: avaluation },
    { question: 'Observações', answer: text.value },
  ];
  return newPage(objeto);
}

input.addEventListener('change', disabledButton);
btnEntrar.addEventListener('click', validation);
textarea.addEventListener('keyup', contador);
button.addEventListener('click', getData);
