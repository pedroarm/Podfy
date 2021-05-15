import styles from "./style.module.scss";

export default function Input({
  label,
  reference,
  placeholder,
  inputType,
  value,
  onChange,
}) {
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={reference}>{label}</label>
      <input
        type={inputType}
        id={reference}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
