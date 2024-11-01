.chatbot {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    font-family: 'Arial', sans-serif;
    transition: transform 0.3s ease;
}

.chat-header {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chat-title {
    font-weight: bold;
}

.chat-icon {
    font-size: 20px;
}

.chatbox {
    padding: 15px;
}

.chat-messages {
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #f9f9f9;
}

.chat-messages p {
    margin: 5px 0;
}

.chatbox input {
    width: calc(100% - 70px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.send-button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.send-button:hover {
    background-color: #0056b3;
}
