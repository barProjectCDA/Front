import styles from "../assets/styles/ServiceProduit.module.css";
import { Link } from "react-router-dom";
 
const ServicesProduit = () => {
    return (
        <>
            <div className={styles.servicesContainer}>
                <h2> Service</h2>
            </div>
 
            <div className={styles.servicesPrdouitContainer}>
                <h2> Produit</h2>
            </div>
           
            <div className={styles.buttonsNewCategorie}>
                <div>
                    <button><Link to="/services" className={styles.link}>Nouvelle categorie</Link></button>
                </div>
            </div>
 
            <div className={styles.buttonsRetour}>
                <div>
                    <button><Link to="/services" className={styles.link}>Retour</Link></button>
                </div>
            </div>
 
        </>
    );
};
 
export default ServicesProduit;