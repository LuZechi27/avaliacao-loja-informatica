import "./DropDown.css";

const DropDown = ({ onChange, label, value, items }) => {

    const onChoose = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className="drop-down">
            <label>{label}</label>
            <select value={value} onChange={onChoose}>
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};
export default DropDown;
