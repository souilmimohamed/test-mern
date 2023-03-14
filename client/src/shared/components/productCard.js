import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { AuthContext } from "../../contexts/authContext";
const ProductCard = ({ product }) => {
  const { loggedIn } = useContext(AuthContext);
  const cutString = (value) => {
    if (value && value.length <= 135) return value;
    else return `${value.substring(0, 135)} ...`;
  };
  return (
    <div className="relative max-w-xs bg-white border border-gray-200 rounded-lg mb-2 ml-2 shadow-lg ">
      <img className="rounded-t-lg object-fill" src={product.image} alt="" />
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {product.name}
        </h5>
        <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
          {cutString(product.description)}
        </p>

        <h1 className="text-gray-700 font-bold text-xl absolute bottom-0 left-0 p-3">
          {product.price} TND
        </h1>
        <div className="flex absolute bottom-0 right-0 p-3">
          <button
            title="details"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <CiViewList className="text-xl" />
          </button>
          <button
            title="add to cart"
            className="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <AiOutlineShoppingCart className="text-xl" />
          </button>
          {loggedIn && (
            <button
              className="mt-1 ml-1 text-xl inline-block float-right cursor-pointer"
              title="Add to Favorites"
            >
              <GrFavorite />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
