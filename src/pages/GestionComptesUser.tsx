import styles from "../assets/styles/GestionCompteUser.module.css";
import { Link } from "react-router-dom";
 
const GestionCompteUser = () => {
    return (
        <>
            <div className={styles.gestioncompteuser}>
                <h2>User</h2>
            </div>
           
            <div className={styles.GestionComptesUserContainer}>
            </div>

            <div className={styles.buttonsStat}>
                <button><Link to="/services" className={styles.link}>STATS</Link></button>
            </div>
            <div className={styles.buttonsGstionCompteUser}>
                <button><Link to="/" className={styles.link}>SUPPRIMER</Link></button>
                <button><Link to="/services" className={styles.link}>VALIDER</Link></button>
            </div>

            <div className={styles.buttonsRetour}>
                <div>
                    <button><Link to="/gestioncompte" className={styles.link}>Retour</Link></button>
                </div>
            </div>
 
        </>
    );
};
 
export default GestionCompteUser;