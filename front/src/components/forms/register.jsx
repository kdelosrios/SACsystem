import React from 'react';
import '../forms/formsStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Register= () => {
  return (
    <div className="login-container">
    <form className="login-form">
      <h2 className="text-center">Iniciar Sesión</h2>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
      </div>
      <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
    </form>
  </div>
);
}

export default Register;