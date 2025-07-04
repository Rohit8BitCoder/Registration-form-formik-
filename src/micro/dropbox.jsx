export default function DropInputField({ className, htmlFor, label, id, values }) {
  return (
    <div>
      <label className={className} htmlFor={htmlFor}>{label}</label>
      <select className="shadow" name={label} id={id}>
        {values.map((val, idx) => (
          <option key={idx} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}