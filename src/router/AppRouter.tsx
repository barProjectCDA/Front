import {Routes, Route} from "react-router-dom";
import Services from "../pages/Services";
import Log from "../pages/Log";
import ServicesProduit from "../pages/ServiceProduit";
// import TestApi from "../pages/testApi";
import CommandHub from "../pages/CommandHub/CommandHub";
import Recap from "../pages/Recap";
import DetailCommande from "../pages/DetailCommande";
import PrivateRoute from "../components/PrivateRoute";
import GestionCompteUser from "../pages/GestionComptesUser";
import GestionCompte from "../pages/GestionComptes";


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/Log" element={<Log />} />
            
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<CommandHub />} />
                <Route path="/users/:id" Component={GestionCompteUser} />

                <Route path="/gestioncompteuser/:id" element={<GestionCompteUser />} />

                <Route path="/gestioncompte" element={<GestionCompte />} />
                <Route path="/Recap" element={<Recap  />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/ServicesProduit" element={<ServicesProduit />} />
                <Route path="/DetailCommande" element={<DetailCommande />} />
            </Route>
            </Routes>
        </>
    );
};

export default AppRouter;