import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/productContext";
import Navbar from "../shared/components/navbar";
import Sidebar from "../shared/components/sidebar";
import ProductCard from "../shared/components/productCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { AuthContext } from "../contexts/authContext";

const Menu = () => {
  const { getProducts } = useContext(ProductContext);
  const { setIsLoading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async (setProducts, products) => {
    setIsLoading(true);
    let skip = page * 10;
    const response = await getProducts(skip, 10);
    if (response && response.Success) {
      setProducts([...products, ...response.Body.products]);
      setPage(page + 1);
      if (products.length === response.Body.count) setHasMore(false);
    } else alert("Something went wrong .");
    setIsLoading(false);
  };
  const refresh = (setProducts) => {};
  useEffect(() => {
    fetchProducts(setProducts, products);
  }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <InfiniteScroll
        dataLength={products.length}
        next={() => {
          fetchProducts(setProducts, products);
        }}
        hasMore={hasMore}
        refreshFunction={refresh}
      >
        <div className="p-24 flex flex-wrap">
          {products.map((product, key) => (
            <ProductCard key={key} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Menu;
