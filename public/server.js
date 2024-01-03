const socket = io();
const messageArea = document.querySelector('.messageArea');
const inputMessageBox = document.getElementById('inputMessage');
const submitBtn = document.getElementById('sendMessageBtn');

let Name;
do {
    Name = prompt('Please enter your name')
} while (!Name);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputMessageBox.value) {
        // socket.emit('message', { user: Name, message: inputMessageBox.value });
        sendMessage(inputMessageBox.value);
        inputMessageBox.value = "";
    }
});

function sendMessage(msg) {
    let Msg = {
        user: Name,
        message: msg.trim()
    }
    appendMessage(Msg, "outgoingMessage");

    scrollToBottom();

    // Send to server....

    socket.emit('message', Msg);
}

function appendMessage(Msg, msgType) {
    let mainDiv = document.createElement('div');
    let className = msgType;
    mainDiv.classList.add(className);

    let markUp = `
    <h4>${Msg.user}</h4>
    <p>${Msg.message}</p>
    `

    mainDiv.innerHTML = markUp;
    messageArea.appendChild(mainDiv);

}

//Recive message....
socket.on('message', (msg)=>{
    appendMessage(msg, "incomingMessage");
    scrollToBottom();
});

function scrollToBottom(){
    messageArea.scrollTop = messageArea.scrollHeight
}