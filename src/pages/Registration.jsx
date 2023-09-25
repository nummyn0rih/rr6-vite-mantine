import { lazy } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Signup } from '../components/Signup';
import { useAuth } from '../context/AuthProvider';

const ErrorBoundary = lazy(() => import('../components/ErrorBoundary').then((module) => ({
  default: module.ErrorBoundary,
})));

export default function Registration() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  const onSubmit = (inputs) => {
    const newUser = {
      username: inputs.email,
      password: inputs.password,
    };

    signup(newUser, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className='form-container'>
      <ErrorBoundary>
        <Signup handler={onSubmit} />
      </ErrorBoundary>
    </div>
  );
}
