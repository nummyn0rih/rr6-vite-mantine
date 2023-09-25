import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input';
import { Button } from '../Button';
import './Signin.css';

export function Signin(props) {
  const formRef = useRef(null);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handler(inputs);
    formRef.current.reset();
  };

  const handleReset = () => {
    setInputs({
      email: '',
      password: '',
    });
  };

  return (
    <form
      ref={formRef}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Input
        type='email'
        label='Email'
        placeholder='Введите Email'
        id='email'
        name='email'
        required
      />
      <Input
        type='password'
        label='Password'
        placeholder='Введите пароль'
        id='password'
        name='password'
        required
      />
      <Button>Войти</Button>
    </form>
  );
}

Signin.propTypes = {
  handler: PropTypes.func,
};
