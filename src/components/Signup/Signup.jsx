import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input';
import { Button } from '../Button';
import './Signup.css';

const initialValue = {
  email: '',
  password: '',
  repassword: '',
};

const validateRules = {
  password: ({ password }) => {
    if (password.length < 6) {
      return 'Пароль минимум 6 символов';
    }
  },
  repassword: ({ password, repassword }) => {
    if (password !== repassword) {
      return 'Пароли не совпадают';
    }
  },
};

export function Signup(props) {
  const formRef = useRef(null);
  const [inputs, setInputs] = useState(initialValue);
  const [errors, setErrors] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const formValidation = (formValues, validateRules) => {
    setErrors([]);

    for (const fieldName in formValues) {
      const validateRule = validateRules[fieldName];

      if (validateRule) {
        const error = validateRule(formValues);

        if (error) {
          setErrors((prevState) => [...prevState, error]);
        }
      }
    }
  };

  useEffect(() => {
    formValidation(inputs, validateRules);
  }, [inputs]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.length === 0) {
      setIsValid(true);
      props.handler(inputs);
      formRef.current.reset();
    } else {
      setIsValid(false);
    }
  };

  const handleReset = () => {
    setInputs(initialValue);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onReset={handleReset}
    >
      <Input
        type='email'
        label='Email'
        placeholder='Введите Email'
        id='email2'
        name='email'
        required
      />
      <Input
        type='password'
        label='Пароль'
        placeholder='Введите пароль'
        id='password2'
        name='password'
        required
      />
      <Input
        type='password'
        label='Пароль'
        placeholder='Повторите пароль'
        id='repassword'
        name='repassword'
        required
      />
      {!isValid && (
        <div className='mt-15'>
          {errors.map((err, i) => (
            <div key={i} className='error'>
              <span className='asterisk'>* </span>
              {err}
            </div>
          ))}
        </div>
      )}
      <Button>Отправить</Button>
    </form>
  );
}

Signup.propTypes = {
  handler: PropTypes.func,
};
