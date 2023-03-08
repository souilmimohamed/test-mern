import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { login, isLoading, error } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) navigate("/menu");
  }, []);

  return (
    <div className="grid h-screen place-items-center">
      <div className="rounded-lg shadow-xl p-20 flex flex-col gap-3 border-1">
        {error && (
          <div className="rounded border-2 px-2 border-red-500">{error}</div>
        )}

        <input
          className="p-2 bg-gray-100 rounded-lg border-none focus:outline-none font-bold text-center w-80"
          placeholder="username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="p-2 bg-gray-100 rounded-lg border-none focus:outline-none font-bold text-center w-80"
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold p-2 disabled:bg-blue-300 disabled:cursor-not-allowed"
          onClick={() => login(username, password)}
          disabled={!(username && password) || isLoading}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
