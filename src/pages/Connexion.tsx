import styles from '../assets/styles/Connexion.module.css';

import cactuslogo from '../assets/svg/cactus.svg';

import Footer from '../components/Footer';

import { Link, useNavigate } from "react-router-dom";

import {useState} from "react";

import { useFetch, Method } from '../hooks/Fetch';



function Connexion() {

    const navigate = useNavigate();
    const {runFetch, loading} = useFetch<string>("http://localhost:8081/auth/login", Method.Post);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        const response = await runFetch({ username, password });

        if (response && response.token) {
            localStorage.setItem("token", response.token);
            navigate('/');
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