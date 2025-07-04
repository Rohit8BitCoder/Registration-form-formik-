export default function InputFields(props) {
  return (
    <input
      value={props.value}
      onKeyUp={props.onKeyUp}
      onClick={props.onClick}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      className={props.className}
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      checked={props.checked}
      onChange={props.onChange}
    />
  );
}
