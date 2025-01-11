const input = document.getElementById('input');
const button = document.getElementById('button');
const list = document.getElementById('list');

function createTask(text) {
    const newElement = document.createElement('li');
    newElement.textContent = text;
    newElement.addEventListener('click', checkTask);
    list.appendChild(newElement);
}

const checkTask = (event) => {
    const target = event.target;
    target.tagName === 'LI' && target.classList.toggle('completed');
}

button.addEventListener('click', () => {
    const text = input.value.trim();
    text && createTask(text);
    input.value = '';
});