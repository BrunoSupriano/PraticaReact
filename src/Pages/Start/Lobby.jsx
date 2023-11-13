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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
            <h1>Bem-Vindo</h1>
            <input
                type="text"
                placeholder="Insira seu nome"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleProceed();
                    }
                }}
            />
            <button onClick={handleProceed}><i class="fa-solid fa-check"></i></button>
        </div>
    );
};

export default Lobby;
