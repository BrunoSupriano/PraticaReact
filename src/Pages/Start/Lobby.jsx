import React, { useState } from 'react';
import './style.css';

const Lobby = ({ onProceed }) => {
    const [username, setUsername] = useState('');

    const handleProceed = () => {
        if (username.trim() !== '') {
            onProceed(username);
        } else {
            alert('Por favor, insira seu nome.');
        }
    };

    return (
        <div>
            <h1>Bem-Vindo</h1>
            <p>Insira seu nome abaixo:</p>
            <input
                type="text"
                placeholder="Insira seu nome"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleProceed}>Proseguir</button>
        </div>
    );
};

export default Lobby;
