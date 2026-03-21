import "./TextArea.css";

const TextArea = ({ onChange, label, value, placeholder, type }) => {

    const onImput = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className="text-area">
            <label>{label}</label>
            <input 
                type={type}
                value={value}
                onChange={onImput}
                placeholder={placeholder}
            />
        </div>
    );
}
export default TextArea;
