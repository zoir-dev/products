import { useEffect, useState } from "react";
import AppBar from "../../components/AppBar/AppBar";
import Products from "../../components/Home/Products/Products";
import "./style.css";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [baskets, setBaskets] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const getProducts = async () => {
    setLoading(true);
    await axios
      .get(
        `https://dummyjson.com/products/${
          category ? `/category/${category}` : ""
        }`,
        {
          params: {
            limit: 20,
            skip: page * 20 - 20,
          },
        }
      )
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error.message);
      });
    setLoading(false);
  };
  console.log(category);
  useEffect(() => {
    getProducts();
  }, [page, category]);
  return (
    <div className="home_div">
      <AppBar baskets={baskets} setBaskets={setBaskets} />
      <Products
        products={products}
        page={page}
        setPage={setPage}
        setBaskets={setBaskets}
        baskets={baskets}
        setSearch={setSearch}
        search={search}
        getProducts={getProducts}
        setCategory={setCategory}
        category={category}
        loading={loading}
      />
    </div>
  );
};

export default Home;
