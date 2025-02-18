import styles from "../assets/styles/GestionCompte.module.css";
import { Link } from "react-router-dom";

const users = [
    "User 1", "User 2", "User 3",
    "User 4", "User 5", "User 6",
    "User 7", "User 8", "User 9",
    "User 10", "User 11", "User 12",
    "User 13", "User 14", "User 15",
    "User 16", "User 17", "User 18",
    "User 19", "User 20", "User 21",
    "User 22", "User 23", "User 24",
    "User 25", "User 26", "User 27",
    "User 28", "User 29", "User 30"
];


const GestionCompte = () => {
    return (
        <>
            <div className={styles.servicesContainer}>
                <h2>Titre</h2>
            </div>
           
            <div className={styles.categoriesContainer}>
                {users.map((cat, index) => (
                    <div key={index} className={styles.categoryItem}>
                        {cat}
                    </div>
                ))}
            </div>

            <div className={styles.buttonsNew}>
                <button><Link to="/services" className={styles.link}>New</Link></button>
            </div>

            <div className={styles.buttonsMonCompte}>
                <button><Link to="/gestioncompteuser" className={styles.link}>Mon Compte</Link></button>
            </div>

            <div className={styles.buttonsRetour}>
                <button><Link to="/services" className={styles.link}>Retour</Link></button>
            </div>
        </>
    );
};

export default GestionCompte;
