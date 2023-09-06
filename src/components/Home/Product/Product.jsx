import "./style.css";
const Product = ({ p, setBaskets, baskets }) => {
  const addToBasket = () => {
    if (!baskets.find((f) => f.id === p.id)) {
      setBaskets([...baskets, p]);
    }
  };
  return (
    <div className="product">
      <div className="withoutButton">
        <p className="discount">-{p.discountPercentage}%</p>
        <img src={p?.images[0]} alt="" />
        <div className="title">
          <h3>{p.title}</h3>
          <p>{p.brand}</p>
        </div>
        <p className="des">{p.description}</p>
        <span>
          rating: <span>{p.rating}</span>
        </span>
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
