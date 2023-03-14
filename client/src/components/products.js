import Navbar from "../shared/components/navbar";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/productContext";
import { AuthContext } from "../contexts/authContext";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
const Products = () => {
  const navigate = useNavigate();
  const { setIsLoading } = useContext(AuthContext);
  const { getProducts, filter, setFilter } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  const fetchProducts = async () => {
    setIsLoading(true);
    let skip = page * 10;
    const response = await getProducts(skip, 10);
    if (response && response.Success) {
      if (response.Body.products.length) setProducts(response.Body.products);
    } else alert("Something went wrong .");
    setIsLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, [page, filter]);
  const handlePagination = (type) => {
    if (type === 1) setPage(page + 1);
    else {
      if (page > 0) setPage(page - 1);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="relative overflow-x-auto p-6">
        <button
          className="flex p-2 bg-green-500 rounded-lg text-white font-semibold mb-2 hover:bg-green-700"
          onClick={() => navigate("/newProduct")}
        >
          <IoMdAddCircleOutline className="text-xl" />
          Add Product
        </button>
        <input
          type="text"
          className="bg-gray-50 max-w-lg border border-gray-300 text-black rounded-lg block p-2 mb-2"
          placeholder="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-white uppercase bg-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                brand
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, key) => (
                <tr className="bg-white border-b" key={key}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                  >
                    {product.name}
                  </th>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.price} TND</td>
                  <td className="px-6 py-4">{product.countInStock}</td>
                  <td className="py-2">
                    <button
                      className="text-red-500 text-2xl p-2 rounded-md hover:bg-gray-200"
                      title="delete"
                    >
                      <AiFillDelete />
                    </button>
                    <button
                      className="text-blue-500 text-2xl p-2 hover:bg-gray-200"
                      title="edit"
                    >
                      <AiFillEdit />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex float-right px-5 py-2">
        <button
          className="bg-white p-2 text-xl text-gray-600 mr-2 disabled:text-gray-200"
          onClick={() => handlePagination(2)}
        >
          <AiFillCaretLeft />
        </button>
        <button
          className="bg-white p-2 text-xl text-gray-600 disabled:text-gray-200"
          onClick={() => handlePagination(1)}
        >
          <AiFillCaretRight />
        </button>
      </div>
    </div>
  );
};

export default Products;
