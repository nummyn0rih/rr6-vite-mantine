import { lazy } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { Signin } from '../components/Signin';
import { Button } from '../components/Button';

const ErrorBoundary = lazy(() => import('../components/ErrorBoundary').then((module) => ({
  default: module.ErrorBoundary,
})));

export default function LoginPage() {
  const { isError, signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  const onSubmit = (inputs) => {
    const user = {
      username: inputs.email,
      password: inputs.password,
    };

    signin(user, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className='form-container'>
      <ErrorBoundary>
        {isError && (
          <div className='error'>Неправильное имя пользователя или пароль</div>
        )}
        <Signin handler={onSubmit} />
        <Link to='/registration'>
          <Button>Зарегистрироваться</Button>
        </Link>
      </ErrorBoundary>
    </div>
  );
}
