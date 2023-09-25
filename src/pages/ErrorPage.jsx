import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='error-page'>
      <h1>Ой!</h1>
      <p>Произошла непредвиденная ошибка.</p>
      <p><i className='error'>{error.statusText || error.message}</i></p>
    </div>
  );
}
