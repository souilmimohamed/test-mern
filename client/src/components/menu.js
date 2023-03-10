import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import Navbar from "../shared/components/navbar";

const Menu = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Menu;
