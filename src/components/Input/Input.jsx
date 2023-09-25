import PropTypes from 'prop-types';
import './Input.css';

export function Input(props) {
  return (
    <div className='form-input'>
      <label htmlFor={props.id}>
        {props.label}
        {props.required && <span className='asterisk'> *</span>}
      </label>
      <div className='wrap'>
        {props.icon}
        <input
          type={props.type ?? 'text'}
          required={props.required}
          id={props.id}
          placeholder={props.placeholder ?? ''}
          name={props.name}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType
  ])
};
