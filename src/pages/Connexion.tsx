import styles from '../assets/styles/Connexion.module.css';
 
import cactuslogo from '../assets/svg/cactus.svg';
 
import Footer from '../components/Footer';

import { Link, Navigate, useNavigate } from "react-router-dom";

import {useState} from "react";

import {showErrorToast, showSuccessToast} from '../components/ToastNotification';

function Connexion() {

        const navigate = useNavigate();
        const [loading, setLoading] = useState(false);
        const [username, setUsername] = useState<string>('');
        const [password, setPassword] = useState<string>('');

        const handleLogin = async () => {
            setLoading(true);
   
            try {
                const response = await fetch('http://localhost:8081/auth/login', {
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({ username, password }),
                });

                const data = await response.json();

                if (!response.ok) {
                    showErrorToast(data.message);
                }
                else{
                    showSuccessToast(data.message);
                    localStorage.setItem("token", data.token)
                    navigate('/')
                    console.log(data);
                }

            }
            catch (error: any) {
                console.error('Erreur de connexion:', error);
                showErrorToast(error)
            }
            finally {
                setLoading(false);
            }
        };

        return (
            <>
                <div className={styles.Connexion}>
                    <div className={styles.h2CO}>
                        <p>Connexion</p>
                    </div>

                    <div className={styles.inputs}>
                        <input placeholder='Identifiant:' value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
                        <input placeholder='Mot de passe:' value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    </div>

                    <div className={styles.button}>
                        <button onClick={handleLogin} disabled={loading}>Valider</button>
                    </div>

                    <div className={styles.besoinAide}>
                        <p>Besoin d'aide ?</p>
                        <Link to="#" className={styles.link}>Contacter le support</Link>
                    </div>
                    <div className={styles.logoCactus}>
                        <img src={cactuslogo} alt="logo cactus" />
                        <p>By myEasyApp</p>
                    </div>
                </div>

                <Footer/>
            </>
        );
    }

    export default Connexion;