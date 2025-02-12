import styles from '../assets/styles/Recap.module.css';

function Recap() {

    return(
        <>
            <div>
                <table className={styles.commandesTable}>
                    <thead>
                        <tr>
                            <th>N° Commande</th>
                            <th>Prix</th>
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>

            <div className={styles.buttonsContainer}>
                <button type="button" className={styles.btnRetour}><a href="/">Retour</a></button>
                <button type="submit" className={styles.btnValider}>Ok</button>
            </div>
        </>
    )
}

export default Recap;
