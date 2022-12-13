const testTextContent = document.querySelector('#testTextContent');

testTextContent.addEventListener('click', (event) => {
    let textPromt = prompt('Введите текст');
    testTextContent.textContent = textPromt;
    event.preventDefault();
})