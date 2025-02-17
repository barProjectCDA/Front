import styles from '../assets/styles/Accueil.module.css';
import { Link } from "react-router-dom";

function Accueil() {

    return(
        <>
            <div>
                <table className={styles.commandesTable}>
                    <thead>
                        <tr>
                            <th>Article</th>
                            <th>Prix</th>
                            <th>Statut</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

            <div className={styles.buttonsContainer}>
                <div>
                    <button><Link to="/Recap" className={styles.link}>Recap</Link></button>
                    <button><Link to="/DetailCommande" className={styles.link}>DtlCommande</Link></button>
                    <button><Link to="/testApi" className={styles.link}>testApi</Link></button>
                </div>
                <div>
                    <button><a href="/">dfdfd</a></button>
                    <button><a href="/">dfdfd</a></button>
                    <button><a href="/">dfdfd</a></button>
                </div>
            </div>
        </>
    )
}

export default Accueil