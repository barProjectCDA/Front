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
                    <button><Link to="/Recap" className={styles.btn}>Recap</Link></button>
                    <button><Link to="/DetailCommande" className={styles.btn}>DetailCom</Link></button>
                    <button><Link to="/testApi" className={styles.btn}>testApi</Link></button>
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