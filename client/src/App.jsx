import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import FavoritesContext from "./context/favoritesCotext";
import { useState } from "react";
import FavoritesPage from "./pages/FavoritesPage";
import BasketContext from "./context/basketContext";
import BasketPage from "./pages/BasketPage";

function App() {
  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favs")));
  const [basket, setBasket] = useState([]);
  if (!localStorage.getItem("favs")) {
    localStorage.setItem("favs", JSON.stringify([]));
  }
  return (
    <>
      <BasketContext.Provider value={{ basket, setBasket }}>
        <FavoritesContext.Provider value={{ favs, setFavs }}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </FavoritesContext.Provider>
      </BasketContext.Provider>
    </>
  );
}

export default App;
