const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendButton.addEventListener('click', async () => {
    const userText = userInput.value.trim();
    if (!userText) return;

    // Display user message
    appendMessage('user', userText);

    // Clear input field
    userInput.value = '';

    // Display "Typing..." indicator
    appendMessage('bot', 'Typing...');
    const typingIndicator = chatWindow.querySelector('.message.bot:last-child');

    // Send request to backend
    const response = await fetch('http://127.0.0.1:5000/api/detect', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userText }),
    });
    const data = await response.json();

    // Remove "Typing..." indicator and show response
    typingIndicator.textContent = `Result: ${data.result}`;
});
