import { useState } from "react";
import styles from "../assets/styles/Header.module.css"; 
import { Link } from "react-router-dom";// Import du CSS

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
        <header className={styles.header}>

            {/* Bouton menu burger */}
            <button className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <h1 className={styles.headerTitle}>Cactus Café</h1>

            {/* Menu */}
            <nav className={`${styles.navLinks} ${isOpen ? styles.active : ""} ${closing ? styles.closing : ""}`}>
                    
                    <div className={styles.divBar} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                    </div>
                
                    <ul>
                        <li><Link to="/">Accueil &#11016;</Link></li>
                        <li><Link to="/gestioncompte">Utilisateurs &#11016;</Link></li>
                        <li><Link to="/Services">Services &#11016;</Link></li>
                        <li><Link to="/Connexion">Déconnexion &#11016;</Link></li>
                    </ul>
            </nav>
        </header>
    );
};

export default Header;
