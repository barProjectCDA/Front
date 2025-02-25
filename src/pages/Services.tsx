import styles from "../assets/styles/Service.module.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section className={styles.sectionsContainer}>
        <div className={styles.servicesContainer}>
          <h2>Services</h2>
        </div>
        <div className={styles.buttonsContainer}>
          <div>
            <button>
              <Link to="/servicesproduit" className={styles.link}>
                Produit
              </Link>
            </button>
            <button>
              <Link to="" className={styles.link}>
                Table
              </Link>
            </button>
            <button>
              <Link to="" className={styles.link}>
                Statistique
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.buttonsRetour}>
          <div>
            <button>
              <Link to="/" className={styles.link}>
                Retour
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
