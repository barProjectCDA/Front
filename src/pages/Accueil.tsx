import styles from '../assets/styles/Accueil.module.css';

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
                    <button><a href="/Recap">Recap</a></button>
                    <button><a href="/DetailCommande">DetailCom</a></button>
                    <button><a href="/testApi">testApi</a></button>
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