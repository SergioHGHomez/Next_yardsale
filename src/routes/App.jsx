import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@styles/global.css";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Layout from "@containers/Layout";
import Login from "@containers/Login";
import Checkout from "@pages/Checkout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import RecoveryPassword from "@containers/RecoveryPassword";

const App = () => {
  const initalState = useInitialState();
  return (
    <AppContext.Provider value={initalState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/rocovery-password" element={<RecoveryPassword />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
