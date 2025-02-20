import {Routes, Route} from "react-router-dom";

import Log from "../pages/Log";
// import TestApi from "../pages/testApi";
import Accueil from "../pages/Accueil";
import Recap from "../pages/Recap";
import DetailCommande from "../pages/DetailCommande";
import PrivateRoute from "../components/PrivateRoute";


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/Log" element={<Log />} />
            
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Accueil />} />
                <Route path="/Recap" element={<Recap  />} />
                <Route path="/DetailCommande" element={<DetailCommande />} />
            </Route>
            </Routes>
        </>
    );
};

export default AppRouter;