import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css'; 

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se agregar se maneja la lógica para manejar la autenticación
  };

  return (
    <div className="container">
      <h1 className="title">Iniciar sesión</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input type="submit" value="Login" />
      </form>

      <div className="link">
        No tienes una cuenta? <button  onClick={() => navigate("/registro")}>Registrarse</button>
      </div>
    </div>
  );
};


