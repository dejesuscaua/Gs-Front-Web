import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginData from '/db/db.json';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageLogin from '../../assets/Loginimage.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const { usuarios } = loginData.login;
    const user = usuarios.find(u => u.email === email && u.senha === password);

    if (user) {
      // Credenciais corretas - redirecionar para a página Home
      navigate('/home');
    } else {
      // Credenciais incorretas - exibir uma mensagem de erro ou realizar outras ações aqui
      console.log('Credenciais inválidas!');
      alert("Credenciais inválidas!")
    }
  };

  return (
    <div>
      <div className=" row justify-content-center ">
        <div className='col-4 pt-5 m-5 p-5'>
          <img className='border rounded w-100 ' src={ImageLogin} alt="" />
        </div>

        <div className='col-4 mt-5 d-flex flex-column'>
          <form className='pt-5' onSubmit={(e) => handleLogin(e)}>
            <h1 className='d-flex justify-content-center mb-5'>Login</h1>

            <div className='d-flex justify-content-center'>
              <input
                className='pt-2 pb-2 border rounded w-75'
                type="email"
                placeholder='Email :'
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='mt-2 d-flex justify-content-center '>
              <input
                className='pt-2 pb-2 border rounded w-75 '
                type="password"
                placeholder='Senha :'
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='mt-5 d-flex justify-content-center'>
              <button className='border rounded pt-2 pb-2 w-50' type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
