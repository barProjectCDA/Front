import { BrowserRouter, Routes, Route } from "react-router-dom";

import Connexion from "../pages/Connexion";
import TestApi from "../pages/testApi";
import Accueil from "../pages/Accueil";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/Connexion" element={<Connexion />} />
                <Route path="/testApi" element={<TestApi />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;