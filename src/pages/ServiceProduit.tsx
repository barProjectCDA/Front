import styles from "../assets/styles/ServiceProduit.module.css";
import { Link } from "react-router-dom";

const categories = [
  "Catégorie 1",
  "Catégorie 2",
  "Catégorie 3",
  "Catégorie 4",
  "Catégorie 5",
  "Catégorie 6",
  "Catégorie 7",
  "Catégorie 8",
  "Catégorie 9",
  "Catégorie 1",
  "Catégorie 2",
  "Catégorie 3",
  "Catégorie 4",
  "Catégorie 5",
  "Catégorie 6",
  "Catégorie 7",
  "Catégorie 8",
  "Catégorie 9",
  "Catégorie 1",
  "Catégorie 2",
  "Catégorie 3",
  "Catégorie 4",
  "Catégorie 5",
  "Catégorie 6",
  "Catégorie 7",
  "Catégorie 8",
  "Catégorie 9",
  "Catégorie 1",
  "Catégorie 2",
  "Catégorie 3",
  "Catégorie 4",
  "Catégorie 5",
  "Catégorie 6",
  "Catégorie 7",
  "Catégorie 8",
  "Catégorie 9",
];

const ServicesProduit = () => {
  return (
    <>
      <section className={styles.servicesContainerSection}>
        <div className={styles.divcomplete}>
          <div className={styles.servicesContainer}>
            <h2> Service</h2>
          </div>

          <div className={styles.servicesPrdouitContainer}>
            <h2> Produit</h2>
          </div>

          <div className={styles.categoriesContainer}>
            {categories.map((cat, index) => (
              <div key={index} className={styles.categoryItem}>
                {cat}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divbtn}>
          <div className={styles.buttonsNewCategorie}>
            <button>
              <Link to="/services" className={styles.link}>
                Nouvelle catégorie
              </Link>
            </button>
          </div>

          <div className={styles.buttonsRetour}>
            <button>
              <Link to="/services" className={styles.link}>
                Retour
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesProduit;
