
let messages = [];

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    
    if (messageText === '') {
        return;
    }
    messages.push(messageText);
    displayMessages();
    messageInput.value = '';
    messageInput.focus();
}
function displayMessages() {
    const chatArea = document.getElementById('chatArea');
    
    let html = '';
    for (let i = 0; i < messages.length; i++) {
        html += '<div class="message">' + messages[i] + '</div>';
    }
    
    chatArea.innerHTML = html;

    chatArea.scrollTop = chatArea.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}