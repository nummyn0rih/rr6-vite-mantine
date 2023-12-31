import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import PrivatRoute from './components/PrivatRoute';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Characters = lazy(() => import('./pages/CharacterList'));
const Character = lazy(() => import('./pages/Character'));
const Locations = lazy(() => import('./pages/LocationList'));
const Location = lazy(() => import('./pages/Location'));
const Episodes = lazy(() => import('./pages/EpisodeList'));
const Episode = lazy(() => import('./pages/Episode'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const Registration = lazy(() => import('./pages/Registration'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        element: <PrivatRoute/>,
        children: [
          {
            path: "characters",
            element: <Characters />,
          },
          {
            path: "characters/:id",
            element: <Character />
          },
          {
            path: "locations",
            element: <Locations />,
          },
          {
            path: "locations/:id",
            element: <Location />
          },
          {
            path: "episodes",
            element: <Episodes />,
          },
          {
            path: "episodes/:id",
            element: <Episode />
          }
        ]
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "registration",
        element: <Registration />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
