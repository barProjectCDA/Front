import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../assets/styles/GestionCompteUser.module.css";

interface User {
  userId: number;
  firstName: string;
  lastName: string;
  username: string;
}

const GestionCompteUser = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/users/${id}`);
        if (!response.ok) {
          throw new Error("Utilisateur non trouvé");
        }
        const data: User = await response.json();
        setUser(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur:",
          error
        );
      }
    };

    fetchUserData();
  }, [id]);

  if (!user) {
    return <div>Chargement des informations de l'utilisateur...</div>;
  }

  return (
    <>
      <section className={styles.sectionuser}>
        <div>
          <div className={styles.gestioncompteuser}>
            <h2>Gestion du compte utilisateur</h2>
          </div>

          <div className={styles.GestionComptesUserContainer}>
            <div className={styles.userInfo}>
              <h3>Informations de l'utilisateur :</h3>
              <p>
                <strong>Nom : </strong>
                {user.firstName} {user.lastName}
              </p>
              <p>
                <strong>Nom d'utilisateur : </strong>
                {user.username}
              </p>
              <p>
                <strong>ID utilisateur : </strong>
                {user.userId}
              </p>
            </div>
          </div>
        </div>

         <div>
         <div className={styles.buttonsStat}>
          <button>
            <Link to="/services" className={styles.link}>
              STATS
            </Link>
          </button>
        </div>

        <div className={styles.buttonsGstionCompteUser}>
          <button>
            <Link to="/" className={styles.link}>
              SUPPRIMER
            </Link>
          </button>
          <button>
            <Link to="/services" className={styles.link}>
              VALIDER
            </Link>
          </button>
        </div>

        <div className={styles.buttonsRetour}>
          <div>
            <button>
              <Link to="/gestioncompte" className={styles.link}>
                Retour
              </Link>
            </button>
          </div>
        </div>

         </div>
       
      </section>
    </>
  );
};

export default GestionCompteUser;
