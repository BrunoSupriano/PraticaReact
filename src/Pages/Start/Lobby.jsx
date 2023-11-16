import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Lobby = ({ onProceed }) => {
  const [username, setUsername] = useState('');
  const [isShaking, setShaking] = useState(false);

  let navigate = useNavigate();

  function handleClick() {
    if (username.trim() !== '') {
      navigate('/chat');
    } else {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      ></link>
      <h1>Bem-Vindo</h1>
      <input
        type="text"
        placeholder="Insira seu nome"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={isShaking ? 'shake' : ''}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleClick();
          }
        }}
      />
      <button type="button" onClick={handleClick}>
        <i class="fa-solid fa-check"></i>
      </button>
    </div>
  );
};

export default Lobby;
