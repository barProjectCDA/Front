import { useEffect, useState } from "react";
import styles from "../assets/styles/GestionCompte.module.css";
import { Link } from "react-router-dom";

interface User{
    "userId": number,
        "firstName": string,
        "lastName": string,
        "username": string
        
}


const GestionCompte = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            const url = "http://localhost:8081/api/users";
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
            const json = await response.json();
            setUsers(json);
          } catch (error:any) {
            console.error(error.message);
          }
          
      }
      fetchData();
    }, []);
      
    return (
        <>
            <div className={styles.servicesContainer}>
                <h2>Titre</h2>
            </div>
           
            <div className={styles.categoriesContainer}>
                {users.map((user:User, index) => (
                    <Link key={index} to="/services" className={styles.link}>
                         <div  className={styles.categoryItem}>
                        {user.username  }
                    </div>
                    </Link>
                ))}
            </div>

            <div className={styles.buttonsNew}>
                <button><Link to="/services" className={styles.link}>New</Link></button>
            </div>

            <div className={styles.buttonsMonCompte}>
                <button><Link to="/gestioncompteuser" className={styles.link}>Mon Compte</Link></button>
            </div>

            <div className={styles.buttonsRetour}>
                <button><Link to="/services" className={styles.link}>Retour</Link></button>
            </div>
        </>
    );
};

export default GestionCompte;
