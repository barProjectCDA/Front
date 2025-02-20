// import './assets/styles/App.css'
import { BrowserRouter } from "react-router-dom";

import AppRouter from './router/AppRouter';
import Header from './components/Header';
import { ToastWrapper } from "./components/ToastNotification";
import AuthProvider from "./context/Authentication/AuthProvider";


function App() {

    
    return (
        <>
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <AppRouter />
                <ToastWrapper />
            </AuthProvider>
        </BrowserRouter>
        </>
    );
}


export default App;






    