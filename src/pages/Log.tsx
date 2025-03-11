import styles from '../assets/styles/Log.module.css';
import cactusLogo from '../assets/svg/cactusLogo.svg';
import Footer from '../components/Footer';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFetch, Method } from '../hooks/Fetch';
import { useAuth } from '../context/Authentication/useAuth';

export default function Log() {
    const user = useAuth();
    const navigate = useNavigate();
    const url = import.meta.env.VITE_APP_URL
    const { runFetch, loading } = useFetch<string>(`${url}/api/auth/login`, Method.Post);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await runFetch({ username, password });
        if (response && response.token) {
            user?.login(response.token);
            navigate('/');
        }
    };

    const handleLogOut = () => {
        user?.logout();
    };

    return (
        <>
            <section className={`${styles.connection} ${user?.authToken ? styles.connected : styles.disconnected}`}>
                <div className={styles.divConnection}>
                    {user?.authToken == null ? (
                        <LogIn 
                            username={username} 
                            password={password} 
                            setUsername={setUsername} 
                            setPassword={setPassword}
                            handleLogin={handleLogin} 
                            loading={loading} 
                        />
                    ) : (
                        <LogOut handleLogOut={handleLogOut} />
                    )}
                    <div className={styles.needHelp}>
                        <p>Besoin d'aide ?</p>
                        <Link to="#" className={styles.link}>Contacter le support</Link>
                    </div>
                </div>

                <div className={styles.cactusLogo}>
                    <p>By myEasyApp</p>
                    <img src={cactusLogo} alt="logo cactus" />
                </div>
            </section>
            <Footer />
        </>
    );
}

interface ILogIn {
    username: string;
    password: string;
    setUsername: (value: string) => void;
    setPassword: (value: string) => void;
    handleLogin: (e: React.FormEvent) => void;
    loading: boolean;
}

function LogIn({ username, password, setUsername, setPassword, handleLogin, loading }: ILogIn) {
    return (
        <>
            <h1 className={styles.title}>Connexion</h1>
            <form className={styles.connexionForm} onSubmit={handleLogin}>
                <div className={styles.inputs}>
                    <input 
                        placeholder='Identifiant:' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        type="text" 
                    />
                    <input 
                        placeholder='Mot de passe:' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password" 
                    />
                </div>
                <button className={styles.submitConnect} type="submit" disabled={loading}>Valider</button>
            </form>
        </>
    )
}

function LogOut({ handleLogOut }: { handleLogOut: () => void }) {
    return (
        <>
            <h1 className={styles.title}>Déjà connecté</h1>
            <form className={styles.connexionForm} onSubmit={(e) => { e.preventDefault(); handleLogOut(); }}>
                <button className={styles.submitDisconnect} type="submit">Déconnexion</button>
            </form>
        </>
    )
}
