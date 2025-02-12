import styles from '../assets/styles/DetailCommande.module.css';

function DetailCommande() {
    return (
        <>
            <div className={styles.tableaux}>
                <table className={styles.detailTable}>
                    <thead>
                        <tr>
                            <th>Payé</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>

            <div className={styles.tableaux}>
                <table className={styles.detailTable}>
                    <thead>
                        <tr>
                            <th>À payer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Ajoute des lignes ici si nécessaire */}
                    </tbody>
                </table>
            </div>

            <div className={styles.buttonsContainer}>
                <button type="button" className={styles.btn}><a href="/Recap">Retour</a></button>
                <button type="submit" className={styles.btn}>All</button>
                <button type="button" className={styles.btn}>Del</button>
                <button type="submit" className={styles.btn}>OK</button>
            </div>
        </>
    );
}

export default DetailCommande;
