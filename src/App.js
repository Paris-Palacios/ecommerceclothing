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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
