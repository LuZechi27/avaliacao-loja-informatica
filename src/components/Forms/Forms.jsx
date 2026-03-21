import { useState } from "react";
import "./Forms.css";
import DropDown from "../DropDown/DropDpwn";
import TextArea from "../TextArea/TextArea";
import Radio from "../Radio/Radio";
import SubmitButton from "../SubmitButton/SubmitButton";

const Forms = ({ sections, brands , onInsert}) => {

    const [section, setSection] = useState("Computadores");
    const [brand, setBrand] = useState("Xing Ling genérico");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [state, setState] = useState("novo");

    const onSubmit = (event) => {
        event.preventDefault();
        onInsert(
            {
                "section": section,
                "brand": brand,
                "name": name,
                "price": price,
                "state": state
            }
        )
    }

    return (
        <section className="forms">
            <form onSubmit={onSubmit}>
                <h2>Dados do produto:</h2>

                <DropDown
                    label="Seção:"
                    items={sections}
                    value={section}
                    onChange={value => setSection(value)}
                />

                <DropDown
                    label="Marca:"
                    items={brands}
                    value={brand}
                    onChange={value => setBrand(value)}
                />

                <TextArea
                    label="Nome:"
                    type="text"
                    placeholder="Digite o nome do produto"
                    value={name}
                    onChange={value => setName(value)}
                />

                <TextArea
                    label="Preco:"
                    type="number"
                    placeholder="Digite o nome do produto"
                    value={price}
                    onChange={value => setPrice(value)}
                />

                <Radio
                    value={state}
                    onChange={value => setState(value)}
                />

                <SubmitButton text="Inserir Produto" />
            </form>
        </section>
    );
};
export default Forms;
