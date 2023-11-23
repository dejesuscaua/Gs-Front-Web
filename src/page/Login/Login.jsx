import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginData from '/db/db.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login({ setLoggedInUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    const { usuarios } = loginData.login;
    const user = usuarios.find(u => u.email === email && u.senha === password);
  
    if (user) {
      const userObject = { name: user.name, email: user.email };
      sessionStorage.setItem('loggedInUser', JSON.stringify(userObject));
      navigate('/home');
      setLoggedInUser(userObject);
    } else {
      console.log('Credenciais inválidas!');
      alert("Credenciais inválidas!");
    }
  };
  return (
    <div className='Loginbody'>
      <div className='container '>
        <div className="row  justify-content-center LoginPage">
          <div className=' col-lg-3  col-md-6 col-sm-10 d-flex flex-column'>
            <form className=' FormBox border border-3  border-white rounded p-5 w-100' onSubmit={(e) => handleLogin(e)}>
              <h1 className='  d-flex m-5 justify-content-center mb-5'>LOGIN</h1>

              <div className='mb-3'>
                <input
                  className='form-control'
                  type="email"
                  placeholder='Email'
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className='mb-3 '>
                <input
                  className='form-control'
                  type="password"
                  placeholder='Senha'
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className='mt-4'>
                <button className='btn btn-primary w-100' type="submit">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
