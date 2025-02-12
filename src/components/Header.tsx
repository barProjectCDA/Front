import { useState } from "react";
import styles from "../assets/styles/Header.module.css"; // Import du CSS

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
                    <li><a href="/">Accueil &#11016;</a></li>
                    <li><a href="#">Utilisateurs &#11016;</a></li>
                    <li><a href="#">Services &#11016;</a></li>
                    <li><a href="/Connexion">Déconnexion &#11016;</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
