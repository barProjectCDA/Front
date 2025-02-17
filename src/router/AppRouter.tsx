import {Routes, Route } from "react-router-dom";
import Services from "../pages/Services";
import Connexion from "../pages/Connexion";
import ServicesProduit from "../pages/ServiceProduit";
// import TestApi from "../pages/testApi";
import Accueil from "../pages/Accueil";
import Recap from "../pages/Recap";
import DetailCommande from "../pages/DetailCommande";


const AppRouter = () => {
    return (
        
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/Recap" element={<Recap  />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/ServicesProduit" element={<ServicesProduit />} />
                <Route path="/DetailCommande" element={<DetailCommande />} />
                <Route path="/Connexion" element={<Connexion />} />
                {/* <Route path="/testApi" element={<TestApi />} /> */}

            </Routes>
     
    );
};

export default AppRouter;