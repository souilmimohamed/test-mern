import { useContext } from "react";
import { AiOutlineArrowRight, AiOutlineShoppingCart } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { AuthContext } from "../../contexts/authContext";
const ProductCard = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg">
      <img
        className="rounded-t-lg"
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>

        <div className="flex item-center justify-between mt-3 pb-1">
          <h1 className="text-gray-700 font-bold text-xl">220 TND</h1>
        </div>
        <button
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          More Details
          <AiOutlineArrowRight className="mt-1 ml-1 text-xl" />
        </button>
        <button
          href="#"
          className="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add To Cart
          <AiOutlineShoppingCart className="mt-1 ml-1 text-xl" />
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
  );
};

export default ProductCard;
