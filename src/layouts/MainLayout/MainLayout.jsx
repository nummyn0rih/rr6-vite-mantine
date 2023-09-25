import { Suspense, lazy } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Login } from '../../components/Login';
import './MainLayout.css';

const ErrorBoundary = lazy(() => import('../../components/ErrorBoundary').then((module) => ({
  default: module.ErrorBoundary,
})));

export function MainLayout() {
  return (
    <>
      <ul className='nav mb-15'>
        <li>
          <NavLink to='/'>Домой</NavLink>
        </li>
        <li>
          <NavLink to='/characters'>Герои</NavLink>
        </li>
        <li>
          <NavLink to='/locations'>Локации</NavLink>
        </li>
        <li>
          <NavLink to='/episodes'>Эпизоды</NavLink>
        </li>
        <Login />
      </ul>
      <ErrorBoundary>
        <Suspense fallback={<div>Загрузка ...</div>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
