import Navbar from "../shared/components/navbar";

const NewProduct = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 w-1/4">
        <div className="p-4 mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Product Name
          </label>
          <input
            type="text"
            className="bg-gray-50 w-full border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
          ></input>
        </div>
        <div className="p-4 mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <textarea
            cols="60"
            rows="5"
            className="bg-gray-50 w-full border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
