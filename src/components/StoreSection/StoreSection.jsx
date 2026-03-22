import Product from "../Product/Product";
import "./StoreSection.css";

const StoreSection = (
    {
        name,
        primaryColor,
        secondaryColor,
        brands,
        products
    }
) => {

    const background = { backgroundColor: primaryColor }
    const underLine = { borderColor: secondaryColor }

    return (
        (products.length > 0) ?
            <section className="section" style={background}>
                <h3 style={underLine}>{name}</h3>

                <div className="products">
                    {products.map((prod) => {
                        return (
                            <Product
                                key={prod.name}
                                brands={brands}
                                brandName={prod.brand}
                                name={prod.name}
                                price={prod.price}
                                state={prod.state}
                            />
                        );
                    })}
                </div>
            </section>
            : ""
    );
};
export default StoreSection;
