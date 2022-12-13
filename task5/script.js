let textField = document.querySelector('#textField');
let paragraph = document.querySelector('#duplicateField');
let button = document.querySelector('#button');

textField.addEventListener('keydown', (event) => {
    paragraph.textContent = textField.value;
})

button.addEventListener('click', (event) => {
    console.log(textField.value);
    textField.value = "";
    paragraph.textContent = "";
    event.preventDefault();
})