import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import Navbar from "../shared/components/navbar";
import ProductCard from "../shared/components/productCard";

const Menu = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <div className="p-2">
        <ProductCard />
      </div>
    </div>
  );
};

export default Menu;
