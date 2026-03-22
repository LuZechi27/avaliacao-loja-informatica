import { useState } from 'react'
import './App.css'
import HeaderBanner from './components/HeaderBanner/HeaderBanner';
import Forms from './components/Forms/Forms';
import Footer from './components/Footer/Footer';
import StoreSection from './components/StoreSection/StoreSection';

function App() {

    const storeSections = [
        {
            name: "Computadores",
            primaryColor: "#b1f0ed",
            secondaryColor: "#07cabd"
        },
        {
            name: "Acessórios",
            primaryColor: "#e67eb5",
            secondaryColor: "#D72483"
        },
        {
            name: "Impressoras",
            primaryColor: "#67cbd6",
            secondaryColor: "#087F8C"
        },
        {
            name: "Games",
            primaryColor: "#4d82c2",
            secondaryColor: "#03254E"
        },
        {
            name: "Gadgets",
            primaryColor: "#f1a38f",
            secondaryColor: "#FF4A1C"
        },
    ];

    const brands = [
        {
            name: "HP",
            image: "/images/hp-logo.png"
        },
        {
            name: "Dell",
            image: "/images/dell-3.svg"
        },
        {
            name: "Positivo",
            image: "/images/positivo-logo.jpg"
        },
        {
            name: "Asus",
            image: "/images/logo-asus.png"
        },
        {
            name: "Xing Ling genérico",
            image: "/images/xing-ling-generico.png"
        }
    ]

    const sectionNames = storeSections.map(section => section.name);
    const brandNames = brands.map(brand => brand.name);

    const [products, setProducts] = useState([]);

    const addProduct = (prod) => {
        const newProductList = products.slice();
        newProductList.push(prod);
        setProducts(newProductList);
    }

    return (
        <div>
            <HeaderBanner />
            <Forms
                sections={sectionNames}
                brands={brandNames}
                onInsert={prod => addProduct(prod)}
            />
            {storeSections.map(section => {
                return (
                    <StoreSection
                        key={section.name}
                        name={section.name}
                        primaryColor={section.primaryColor}
                        secondaryColor={section.secondaryColor}
                        brands={brands}
                        products={products.filter(prod => prod.section === section.name)}
                    />
                );
            })}
            <Footer />
        </div>
    )
}

export default App;
