import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Lobby = () => {
    const [username, setUsername] = useState('');
    const history = useHistory();

    const handleProceed = () => {
        if (username.trim() !== '') {
            // Você pode passar o nome do usuário para o chat através do estado ou de outros métodos
            // Neste exemplo, estou usando o histórico para navegar para a rota do chat com o nome do usuário como parâmetro.
            history.push(`/chat?username=${encodeURIComponent(username)}`);
        }
    };

    return (
        <div>
            <h2>Bem-vindo ao Lobby</h2>
            <label htmlFor="username">Seu Nome:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleProceed}>Proseguir</button>
        </div>
    );
};

export default Lobby;
