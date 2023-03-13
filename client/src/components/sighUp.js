import { IoLogoReact } from "react-icons/io5";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CreateUser } from "../shared/apis/usersApi";
import { AuthContext } from "../contexts/authContext";
const SighUp = () => {
  const navigate = useNavigate();
  const [accountData, setAccountData] = useState(null);
  const { setIsLoading, login } = useContext(AuthContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newData = Object.assign({}, accountData, { [name]: value });
    setAccountData(newData);
  };
  const handleClick = async () => {
    setIsLoading(true);
    const response = await CreateUser(accountData);
    if (response.Success) {
      login({ email: accountData.email, password: accountData.password });
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, [navigate]);
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <IoLogoReact className="text-6xl text-blue-400" />
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-400 dark:border-gray-400">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create and account
          </h1>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex : jhon doe"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={() => handleClick()}
          >
            Create an account
          </button>
          <div className="flex">
            <p className="text-white font-bold">already have an acount ?</p>
            <p
              className="text-blue-600 ml-2 cursor-pointer font-bold hover:text-blue-800"
              onClick={() => navigate("/signIn")}
            >
              Sign in
            </p>
            <p
              className="text-blue-600 ml-2 cursor-pointer font-bold hover:text-blue-800 flex"
              onClick={() => navigate("/")}
            >
              <AiOutlineArrowLeft className="mt-1" />
              Back to Menu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SighUp;
