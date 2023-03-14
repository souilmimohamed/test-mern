import React, { useState } from "react";
import { CreateProduct, GetProducts } from "../shared/apis/productApi";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const createProduct = async (product) => {
    const response = await CreateProduct(product);
    return response;
  };
  const getProducts = async (skip, limit) => {
    const response = await GetProducts(skip, limit, filter);
    return response;
  };

  return (
    <ProductContext.Provider
      value={{
        createProduct,
        getProducts,
        filter,
        setFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
