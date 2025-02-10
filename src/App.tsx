// import './assets/styles/App.css';

import AppRouter from './router/AppRouter';
import Header from './components/Header';

function App() {
    return (
        <div>
            <style>@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');</style>
            <Header />
            <AppRouter />
        </div>
    );
}

export default App;
