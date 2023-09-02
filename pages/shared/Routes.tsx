import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPage } from "Auth";
import ProductsList from "./components/products/products-list";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (
  _props: unknown
) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignUpPage />} />
        <Route path="/aboutList" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
