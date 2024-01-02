const socket = io();

const messageArea = document.getElementById('messageArea')

const incomingMessage = document.getElementById('incomingMessage');

const outgoingMessage = document.getElementById('outgoingMessage');

const inputMessageBox = document.getElementById('inputMessage');

const submitBtn = document.getElementById('sendMessageBtn');

let Name;
do {
    Name = prompt('Please enter your name')
} while (!Name);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputMessageBox.value) {
        socket.emit('message', inputMessageBox.value);
        inputMessageBox.value = ""
    }
});