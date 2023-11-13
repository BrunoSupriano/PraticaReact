import React, { useState } from 'react';
import './style.css';

function App() {
    const [messages, setMessages] = useState([
        { user: 'Atendente', text: 'Olá Sr. Bruno' },
        { user: 'Atendente', text: 'Tudo bem?' },
    ]);

    const sendMessage = (message) => {
        setMessages([...messages, { user: 'Você', text: message }]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const messageInput = document.getElementById("mensagem");
        const message = messageInput.value.trim();
        if (message !== "") {
            sendMessage(message);
            messageInput.value = "";
            messageInput.focus();
        }
    };

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
            <header>
                <h2>Atendimento on-line</h2>
                <div id="chat-screen">
                    <div className="messages-list">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message-item ${msg.user === 'Você' ? 'message-user' : ''}`}>
                                <div className="msg-user"><strong>{msg.user} diz:</strong></div>
                                <div className="msg-chat">{msg.text}</div>
                            </div>
                        ))}
                    </div>
                    <form id="form-chat-send" onSubmit={handleSubmit}>
                        <input type="text" id="mensagem" name="message" placeholder="Digite sua mensagem..." />
                        <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default App;
