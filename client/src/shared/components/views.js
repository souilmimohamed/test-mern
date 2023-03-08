import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../components/login";
import Menu from "../../components/menu";
import { AuthContext } from "../../contexts/authContext";
import Protected from "./protected";
import Loader from "../../shared/components/loader";

const Views = () => {
  const { loggedIn, isLoading } = useContext(AuthContext);

  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/menu"
          element={
            <Protected loggedIn={loggedIn}>
              <Menu />
            </Protected>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default Views;
