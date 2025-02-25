import styles from '../assets/styles/Home.module.css';
import { Link } from "react-router-dom";

function Home() {

    return(
        <>
            <section className={styles.tableSection}>
                <div className={styles.table}>
                    <div className={`${styles.header} ${styles.row}`}>
                        <div className={styles.columnNumber}><p>n°</p></div>
                        <div className={styles.columnProduct}><p>Produit</p></div>
                        <div className={styles.columnPrice}><p>Prix</p></div>
                        <div className={styles.columnState}><p>Payé</p></div>
                    </div>
                    <div className={styles.overflowTable}>
                        <div className={styles.row}>
                            <div className={styles.columnNumber}><p>1</p></div>
                            <div className={styles.columnProduct}><p>Mojito</p></div>
                            <div className={styles.columnPrice}><p>8.30</p></div>
                            <div className={styles.columnState}><p>Non</p></div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.columnNumber}><p>1</p></div>
                            <div className={styles.columnProduct}><p>Mojito</p></div>
                            <div className={styles.columnPrice}><p>8.30</p></div>
                            <div className={styles.columnState}><p>Non</p></div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.columnNumber}><p>1</p></div>
                            <div className={styles.columnProduct}><p>Mojito</p></div>
                            <div className={styles.columnPrice}><p>8.30</p></div>
                            <div className={styles.columnState}><p>Non</p></div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.columnNumber}><p>1</p></div>
                            <div className={styles.columnProduct}><p>Mojito</p></div>
                            <div className={styles.columnPrice}><p>8.30</p></div>
                            <div className={styles.columnState}><p>Non</p></div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.columnNumber}><p>1</p></div>
                            <div className={styles.columnProduct}><p>Mojito</p></div>
                            <div className={styles.columnPrice}><p>8.30</p></div>
                            <div className={styles.columnState}><p>Non</p></div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.columnNumber}><p>1</p></div>
                            <div className={styles.columnProduct}><p>Mojito</p></div>
                            <div className={styles.columnPrice}><p>8.30</p></div>
                            <div className={styles.columnState}><p>Non</p></div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.columnNumber}><p>1</p></div>
                            <div className={styles.columnProduct}><p>Mojito</p></div>
                            <div className={styles.columnPrice}><p>8.30</p></div>
                            <div className={styles.columnState}><p>Non</p></div>
                        </div>
                    </div>
                </div>
                <div className={styles.commandDetails}>
                    <p className={styles.tableInfo}>Table: 12</p>
                    <p className={styles.totalPrice}>Total: 68€</p>
                </div>
            </section>

            <section className={styles.buttonSection}>
                <div className={styles.staticButtonDiv}>
                    <div className={styles.mainStaticButtonDiv}>
                        <button className={`${styles.mainStaticButton} ${styles.tableButton}`}>Table</button>
                        <button className={`${styles.mainStaticButton} ${styles.cancelButton}`}>Annuler</button>
                        <button className={`${styles.mainStaticButton} ${styles.sendButton}`}>Envoyer</button>
                    </div>
                    <div className={styles.secondStaticButtonDiv}>
                        <button className={styles.secondStaticButton}>Bière</button>
                        <button className={styles.secondStaticButton}>Cocktail</button>
                        <button className={styles.secondStaticButton}>Soft</button>
                        <button className={styles.secondStaticButton}>Cuisine</button>
                        <button className={styles.secondStaticButton}>Apéritif</button>
                        <button className={styles.secondStaticButton}>Alcool</button>
                        <button className={styles.secondStaticButton}>Vin</button>
                        <button className={styles.secondStaticButton}>Champagne</button>
                    </div>
                </div>
                <div className={styles.variableButtonDiv}></div>
            </section>
        </>
    )
}

export default Home