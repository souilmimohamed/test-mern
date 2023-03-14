import { useContext, useRef, useState } from "react";
import Navbar from "../shared/components/navbar";
import { convertBase64 } from "../shared/base64Converter";
import { ProductContext } from "../contexts/productContext";
import { AuthContext } from "../contexts/authContext";
const NewProduct = () => {
  const { createProduct } = useContext(ProductContext);
  const { setIsLoading } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  //refs
  const hiddenFileInput = useRef(null);
  const nameRef = useRef(null);
  const brandRef = useRef(null);
  const categoryRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const stockRef = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    const base64 = await convertBase64(fileUploaded);
    const newData = Object.assign({}, product, { image: base64 });
    setProduct(newData);
    setImage(base64);
  };
  const handleFormChange = ({ target }) => {
    const { name, value } = target;
    const newData = Object.assign({}, product, { [name]: value });
    setProduct(newData);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await createProduct(product);
    if (response && response.Success) {
      setProduct(null);
      setImage("");
      reset();
    } else alert("Something Went wrong .");
    setIsLoading(false);
  };
  const reset = () => {
    nameRef.current.value = "";
    brandRef.current.value = "";
    categoryRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
    stockRef.current.value = "";
  };
  return (
    <>
      <Navbar />
      <div className="p-1 w-1/4">
        <div className="p-1 mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Product Name
          </label>
          <input
            ref={nameRef}
            name="name"
            type="text"
            className="bg-gray-50 w-full border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
            onChange={handleFormChange}
          ></input>
        </div>
        <div className="p-1 mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Brand
          </label>
          <input
            ref={brandRef}
            name="brand"
            type="text"
            className="bg-gray-50 w-full border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
            onChange={handleFormChange}
          ></input>
        </div>
        <div className="p-1 mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Category
          </label>
          <input
            ref={categoryRef}
            name="category"
            type="text"
            className="bg-gray-50 w-full border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
            onChange={handleFormChange}
          ></input>
        </div>
        <div className="p-1 mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <textarea
            ref={descriptionRef}
            name="description"
            cols="60"
            rows="5"
            className="bg-gray-50 w-full border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
            onChange={handleFormChange}
          ></textarea>
        </div>
        <div className="flex">
          <div className="p-1 mb-2 w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              price
            </label>
            <input
              ref={priceRef}
              name="price"
              type="text"
              className="bg-gray-50 w-full border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
              onChange={handleFormChange}
            ></input>
          </div>
          <div className="p-1 mb-2 w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Stock
            </label>
            <input
              ref={stockRef}
              name="countInStock"
              type="text"
              className="bg-gray-50 w-full border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
              onChange={handleFormChange}
            ></input>
          </div>
        </div>
        <div className="p-1 mb-2">
          <input
            type="file"
            className="hidden"
            ref={hiddenFileInput}
            onInput={handleChange}
          />
          <button
            className="bg-black rounded-lg p-2 ml-1 text-white font-semibold"
            onClick={handleClick}
          >
            Choose Image
          </button>
          <img
            src={image}
            alt="No image selected ."
            className="mt-2 p-1 border-2 border-black font-semibold"
          />
        </div>
        <button
          className="bg-green-400 rounded-lg p-2 ml-2 text-white font-semibold"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default NewProduct;
