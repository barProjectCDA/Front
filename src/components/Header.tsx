import { useState, useEffect, useContext } from "react";
import styles from "../assets/styles/Header.module.css";
import { Link } from "react-router-dom";// Import du CSS
import { useAuth } from "../context/Authentication/useAuth";



const Header = () => {

    const user = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


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
            <nav className={`${styles.navBar}`}>
                {user?.authToken != null ? ( 
                    <>
                    {isMobile &&
                        <button className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    }
                
                

                {/* Menu */}
                
                    
                    <div className={`${styles.navLinks} ${isOpen ? styles.active : ""} ${closing ? styles.closing : ""}`}>
                            
                            <div className={styles.closeDiv} onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                            </div>
                        
                            <ul>
                                <li><Link to="/">Accueil </Link></li>
                                <li><Link to="#">Utilisateurs </Link></li>
                                <li><Link to="#">Services </Link></li>
                                <li><Link to="/log">Déconnexion </Link></li>
                            </ul>
                    </div>
                    </>
                ) : null }

                <p className={`${styles.headerTitle}`}>Cactus Café</p>
            </nav>
        </header>
    );
};

export default Header;
