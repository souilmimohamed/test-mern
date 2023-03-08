import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import Navbar from "../shared/components/navbar";
import SideBar from "../shared/components/sideBar";

const Menu = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <SideBar title="Dashboard">
        <button
          className="bg-red-600 p-2 rounded text-white font-bold"
          onClick={() => logout()}
        >
          LOGOUT
        </button>
      </SideBar>
    </div>
  );
};

export default Menu;
