import { useState, useEffect} from "react";
import styles from "../assets/styles/Header.module.css";
import { Link } from "react-router-dom";// Import du CSS
import { useAuth } from "../context/Authentication/useAuth";
import { useLocation } from "react-router-dom";


const Header = () => {

    const user = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
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

    const handleLinkClick = () => {
        if (isMobile) {
            toggleMenu();
        }
    };

    const commandePathName = location.pathname === "/" || location.pathname === "/listingCommande";

    return (
        


        <header className={commandePathName ? styles.headerHome : styles.header}>
           {commandePathName ? <NavBarHome isMobile={isMobile} isOpen={isOpen} toggleMenu={toggleMenu} user={user} closing={closing} handleLinkClick={handleLinkClick}/>:
           <NavBarBasic isMobile={isMobile} isOpen={isOpen} toggleMenu={toggleMenu} user={user} closing={closing} handleLinkClick={handleLinkClick} />}
            
            
        </header>
        
    );
};

const NavBarBasic =  ({ isMobile, isOpen, toggleMenu, user, closing, handleLinkClick}: { isMobile: boolean, isOpen: boolean, toggleMenu(): any, user: any, closing: boolean, handleLinkClick(): void}) => {
    return (
        <>
            <nav className={`${styles.navBarBasic}`}>
                
                <BurgerMenu isMobile={isMobile} isOpen={isOpen} toggleMenu={toggleMenu} user={user} closing={closing} handleLinkClick ={handleLinkClick} />
                <p className={`${styles.headerTitle}`}>Cactus Café</p>

            </nav>
        </>
    )
}

const NavBarHome = ({ isMobile, isOpen, toggleMenu, user, closing, handleLinkClick}: { isMobile: boolean, isOpen: boolean, toggleMenu(): any, user: any, closing: boolean, handleLinkClick(): void}) => {
    return (
        <>
            <nav className={`${styles.navBarHome} ${!isMobile ? styles.desktop : ""}`}>

                <BurgerMenu isMobile={isMobile} isOpen={isOpen} toggleMenu={toggleMenu} user={user} closing={closing} handleLinkClick={handleLinkClick} />
                {!isMobile &&  
                    <>
                    <p className={`${styles.headerTitle}`}>Cactus Café</p>
                    </>
                }
                <div className={`${styles.divButtonTitle}`}>
                    <Link to="/" className={styles.headerAHome}>Tony</Link>
                    <Link to="/listingCommande" className={styles.headerAHome}>Commandes</Link>
                </div>

            </nav>
        </>
    )
}


const BurgerMenu = ({isMobile, isOpen, toggleMenu, user, closing, handleLinkClick}: {isMobile:boolean, isOpen: boolean, toggleMenu(): void, user: any, closing: boolean, handleLinkClick(): void}) => {
    return (
        <>
            {user?.authToken != null ? (
                <>
                    {isMobile &&
                    <button className={`${styles.burgerMenu}  ${location.pathname == "/" ? styles.home : ""} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    }
                    <div className={`${styles.navLinks} ${isOpen ? styles.active : ""} ${closing ? styles.closing : ""}`}>

                        <div className={styles.closeDiv} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                        </div>

                        <ul>
                            <li onClick={handleLinkClick}> <Link to="/">Commandes </Link></li>
                            <li onClick={handleLinkClick}><Link to="/gestioncompte">Utilisateurs </Link></li>
                            <li onClick={handleLinkClick}><Link to="/Services">Services </Link></li>
                            <li onClick={handleLinkClick}><Link to="/log">Déconnexion </Link></li>
                        </ul>
                    </div>
                </>
            ) : null}

        </>
    )
}

export default Header;
