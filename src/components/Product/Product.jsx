import "./Product.css";

const Product = ({brands, name, price, state, brandName }) => {

    const brand = brands.filter(b => b.name === brandName)[0]

    return (
        <div className="productHolder">
            <div className="productHeader">
                <img src={brand.image} alt={brand.name} />
            </div>
            <div className="productFooter">
                <h4>{name}</h4>
                <h4>{price}</h4>
                <h5>{state}</h5>
            </div>
        </div>
    );
};
export default Product;
