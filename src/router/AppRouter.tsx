import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import TestApi from "../pages/testApi";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/testApi" element={<TestApi />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;