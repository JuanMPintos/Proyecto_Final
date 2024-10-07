import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { RestaurantSearch } from "./pages/restaurantSearch"; 
// import { RestaurantDetail } from "./pages/restaurantDetail"; 
import { RegistroCompletoRestaurante } from "./pages/registro_restaurante"; // Asegúrate de que la ruta sea correcta
import { PrivateView } from "./pages/privateView";
import RestaurantDetail from "./pages/restaurantDetail"; // Asegúrate de que la ruta sea correcta
import VistaPrivadaRestaurante from "./pages/vistaPrivadaRestaurante";
import { RegistroRestaurante } from "./pages/registro_restaurante";

const Layout = () => {

    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div style={{background:'linear-gradient(to left, #2c2c2c, #6a6a6a)'}}>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Home />} path="/home" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<RestaurantSearch />} path="/restaurantes/:tipo" />
                        
                        {/* Nueva ruta para el registro de restaurantes */}
                        <Route element={<RegistroCompletoRestaurante />} path="/registro_restaurante" />
                        <Route element={<RestaurantDetail />} path="/restaurant/detail/:id" />
                        {/* Vista privada usuario */}
                        <Route element={<PrivateView />} path="/private" />
                        {/* Vista privada restaurante */}
                        <Route element={<VistaPrivadaRestaurante />} path="/vistaPrivadaRestaurante"  />
                        <Route element={<h1>Not found!</h1>} path="*" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
