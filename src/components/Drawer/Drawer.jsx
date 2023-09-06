import "./style.css";

function Drawer({ open, setOpen, baskets, setBaskets }) {
  const toggleDrawer = () => {
    setOpen(false);
  };
  const remove = (p) => {
    setBaskets(baskets.filter((b) => b.id !== p));
  };

  return (
    <>
      <div
        className={`backdrop ${open ? "backdrop_open" : ""}`}
        onClick={toggleDrawer}
      ></div>
      <div className={`drawer ${open ? "open" : ""}`}>
        <div className="content">
          <div className="title">
            <h4>Products</h4>
            <button className="toggle-button" onClick={toggleDrawer}>
              &times;
            </button>
          </div>
          <div className="basket_products">
            {baskets.length ? (
              baskets.map((b) => (
                <div className="basket_product" key={b.id}>
                  <img src={b.thumbnail} alt="" />
                  <div>
                    <p>{b.title}</p>
                    <button onClick={() => remove(b.id)}>&times;</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No baskets</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
