const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
} )

const alertFunction = document.querySelector('#alert');

alertFunction.addEventListener('click', () => {
    alert('Служит для вывода на экран пользователя модальное окно с текстом');
} )

const promt = document.querySelector('#prompt');

promt.addEventListener('click', () => {
    alert('Позволяет получить от пользователя какой-либо текст');
} )