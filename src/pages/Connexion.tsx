import styles from '../assets/styles/Connexion.module.css';

import cactuslogo from '../assets/svg/cactus.svg';

import Footer from '../components/Footer';


function Connexion() {
    
    return (
        <>
            <div className={styles.Connexion}>
                <div className={styles.h2CO}>
                    <p>Connexion</p>
                </div>

                <div className={styles.inputs}>
                    <input placeholder='Identifiant:' type="text" />
                    <input placeholder='Mot de passe:' type="password" />
                </div>

                <div className={styles.button}>
                    <button><a href="/">Valider</a></button>
                </div>

                <div className={styles.besoinAide}>
                    <p>Besoin d'aide ?</p>
                    <a href="#">Contacter le support</a>
                </div>
                <div className={styles.logoCactus}>
                    <img src={cactuslogo} alt="logo cactus" />
                    <p>By myEasyApp</p>
                </div>
            </div>

            <Footer/>
        </>
    )
    }

export default Connexion