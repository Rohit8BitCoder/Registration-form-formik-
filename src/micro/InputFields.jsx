import { useContext } from 'react';
import FormContext from '../FormContext';

export default function InputFields(props) {
  const formik = useContext(FormContext);
  return (
    <input
      value={formik.values[props.name]}
      onChange={formik.handleChange}
      onKeyUp={props.onKeyUp}
      onClick={props.onClick}
      onBlur={props.onBlur || formik.handleBlur}
      onFocus={props.onFocus}
      className={props.className}
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      checked={props.checked}
    />
  );
}
