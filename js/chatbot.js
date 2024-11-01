function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = chatbox.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.querySelector('.chat-messages');
    
    if (userInput.value.trim() !== '') {
        const userMessage = document.createElement('p');
        userMessage.innerHTML = `<strong>Tú:</strong> ${userInput.value}`;
        chatMessages.appendChild(userMessage);
        userInput.value = '';

        // Respuesta del chatbot (puedes personalizar esto)
        const botMessage = document.createElement('p');
        botMessage.innerHTML = `<strong>Chatbot:</strong> Gracias por tu mensaje, lo he recibido.`;
        chatMessages.appendChild(botMessage);
        
        // Desplazar el scroll hacia abajo
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
