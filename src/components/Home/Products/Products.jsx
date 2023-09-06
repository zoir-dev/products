import "./style.css";
import Product from "../Product/Product";
import ChakraPagination from "../../Pagination/Pagination";
import loading_gif from "../../../assets/ZKZg.gif";
import { useEffect, useState } from "react";
import axios from "axios";
const Products = ({
  products,
  page,
  setPage,
  setBaskets,
  baskets,
  search,
  setSearch,
  getProducts,
  category,
  setCategory,
  loading,
}) => {
  const [categories, setCategories] = useState([]);
  const getCategoris = () => {
    axios
      .get(`https://dummyjson.com/products/categories`)
      .then((response) => {
        setCategories(response.data);
        // setCategory(response.data[0]);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  useEffect(() => {
    getCategoris();
  }, []);
  return (
    <div className="products_div">
      <h1>Products</h1>
      {categories.length && (
        <div className="categories">
          <button
            onClick={() => setCategory("")}
            className={category === "" ? "active" : ""}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={category === c ? "active" : ""}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      {!loading ? (
        <div className="products">
          {products.map((p) => (
            <Product
              p={p}
              key={p.id}
              setBaskets={setBaskets}
              baskets={baskets}
            />
          ))}
        </div>
      ) : (
        <img className="loading_gif" src={loading_gif} alt="loading_gif" />
      )}
      {!loading && !category && (
        <ChakraPagination
          totalCount={category ? products.length : 100}
          pageSize={20}
          currentPage={page}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default Products;
