import { Link } from 'react-router-dom';
import ImageUser from '/src/assets/undraw_male_avatar_g98d (3) 1.png'
import './Header.css';

function Header({ loggedInUser }) {


  const logout = () => {

    window.location.href = "/login";
  };

  return (
    <div>
      <div id='header' className='row  p-3'>
        <div className='col-md-4 d-flex align-items-center justify-content-center'>
          <h1>HealthSync</h1>
        </div>

        <div className='col-md-4 d-flex align-items-center justify-content-center'>
          <p>Global Solution 2023 - Engenharia de Software</p>
        </div>
        <div className='col-md-4 '>
          <div className='d-flex flex-column align-items-center'>
            <img src={ImageUser} alt="" className='rounded-circle mb-2' style={{ width: '40px', height: '40px' }} />
            {loggedInUser ? (
              <>
                <p className='mb-0'>{loggedInUser.name}</p>
                <p className='mb-0'>{loggedInUser.email}</p>
              </>
            ) : (
              <p className='mb-0'>Usuário não autenticado</p>
            )}
            <Link onClick={logout} to="/login" className='mt-2 text-decoration-none text-white'>Deslogar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;