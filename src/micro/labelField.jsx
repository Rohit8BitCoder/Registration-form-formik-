export default function LabelField({ htmlFor, name, className , id }) {
  return (
    <label htmlFor={htmlFor} className={className} id={id}>
      {name}
    </label>
  );
}