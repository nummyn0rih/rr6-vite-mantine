import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { Button } from '../Button';
import './Login.css';

export function Login() {
  const { currentUser, signout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    signout(() => {
      navigate('/');
    });
  };

  return (
    <div className='btn-container'>
      {currentUser === null ? (
        <>
          <Link to='/login'>
            <Button>Sign In</Button>
          </Link>
          <Link to='/registration'>
            <Button>Sign Up</Button>
          </Link>
        </>
      ) : (
        <Link to='/'>
          <Button handler={handleClick}>Sign Out</Button>
        </Link>
      )}
    </div>
  );
}
