import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.pages";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Router,
  Routes,
  useParams,
} from "react-router-dom";
import ShopPage from "./shop/shop";
import { Header } from "./header/header.component";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
        <Route path="/*"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
