import Navbar from "../shared/components/navbar";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
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
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Apple</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">10</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
