import { useState } from "react";
import "../assets/styles/Header.css"; // Import du CSS

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const toggleMenu = () => {
        if (isOpen) {
            setClosing(true);
            setTimeout(() => {
                setIsOpen(false);
                setClosing(false);
            }, 500);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <header className="header">
            

            {/* Bouton menu burger */}
            <button 
                className={`burger-menu ${isOpen ? "open" : ""}`} 
                onClick={toggleMenu}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>


            <h1 className="header-title">Cactus Café</h1>

            {/* Menu avec animation de fermeture */}
            <nav className={`nav-links ${isOpen ? "active" : ""} ${closing ? "closing" : ""}`}>
                    
                    <div className="divBar" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                
                <ul>
                    <li><a href="#">Accueil &#11016;</a></li>
                    <li><a href="#">Utilisateurs &#11016;</a></li>
                    <li><a href="#">Services &#11016;</a></li>
                    <li><a href="#">Déconnexion &#11016;</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
