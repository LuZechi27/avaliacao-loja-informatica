import { useState } from 'react'
import './App.css'
import HeaderBanner from './components/HeaderBanner/HeaderBanner';
import Forms from './components/Forms/Forms';

function App() {

    // todo : listar os produtos


    const storeSections = [
        {
            name: "Computadores",
            primaryColor: "#9bf1ec",
            secondaryColor: "#0affed"
        },
        {
            name: "Acessórios",
            primaryColor: "#e67eb5",
            secondaryColor: "#D72483"
        },
        {
            name: "Impressoras",
            primaryColor: "#9bf1ec",
            secondaryColor: "#0affed"
        },
        {
            name: "Games",
            primaryColor: "#e67eb5",
            secondaryColor: "#D72483"
        },
        {
            name: "Gadgets",
            primaryColor: "#9bf1ec",
            secondaryColor: "#0affed"
        },
    ];

    const brands = [
        "HP",
        "Dell",
        "Positivo",
        "Asus",
        "Xing Ling genérico"
    ]

    const sectionNames = storeSections.map(section => section.name);

    return (
        <div>
            <HeaderBanner />
            <Forms
                sections={sectionNames}
                brands={brands}
                onInsert={value => console.log(value)}
            />

            <footer className='footer'>
                <p>Feito por Luiz Gustavo Silva Zechi</p>
                <p>IFSP São carlos</p>
            </footer>
        </div>
    )
}

export default App;
