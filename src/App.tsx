// import './assets/styles/App.css'
import { BrowserRouter } from "react-router-dom";

import AppRouter from './router/AppRouter';
import Header from './components/Header';
import { ToastWrapper } from "./components/ToastNotification";

function App() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <AppRouter />
            <ToastWrapper />
        </BrowserRouter>
        </>
    );
}

export default App;
