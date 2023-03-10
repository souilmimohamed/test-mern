import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "../../components/menu";
import SighUp from "../../components/sighUp";
import SignIn from "../../components/signIn";
import Products from "../../components/products";
import NewProduct from "../../components/newProduct";
import { AuthContext } from "../../contexts/authContext";
import Protected from "./protected";
import Loader from "../../shared/components/loader";

const Views = () => {
  const { loggedIn, isLoading } = useContext(AuthContext);

  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="signUp" element={<SighUp />}></Route>
        <Route path="signIn" element={<SignIn />}></Route>
        <Route
          path="products"
          element={
            <Protected loggedIn={loggedIn}>
              <Products />
            </Protected>
          }
        ></Route>
        <Route
          path="newProduct"
          element={
            <Protected loggedIn={loggedIn}>
              <NewProduct />
            </Protected>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default Views;
