import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="cities" replace={true} />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="cities" element={<CityList />} />

            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<h1>List of countries</h1>} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
