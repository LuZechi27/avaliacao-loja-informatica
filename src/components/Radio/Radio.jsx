import "./Radio.css";

const Radio = ({ onChange , value}) => {

    const onChoose = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className="radio">
            <div className="radio-option">
                <input 
                    type="radio"
                    id="new"
                    value="novo"
                    onChange={onChoose}
                    checked={value === "novo"}
                />
                <label htmlFor="new">Novo</label>
            </div>

            <div className="radio-option">
                <input 
                    type="radio" 
                    id="used"
                    value="usado"
                    onChange={onChoose}
                    checked={value === "usado"}
                />
                <label htmlFor="used">Usado</label>
            </div>

        </div>
    );
};
export default Radio;
