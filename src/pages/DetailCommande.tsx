import '../assets/styles/DetailCommande.css';

function DetailCommande() {
    return (
        <>
            <h2>Détail de la commande</h2>
    <div>
          <div className="tableaux">
          <table className="detail-table">
                <thead>
                    <tr>
                        <th>Payé</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>

          </div>

          <div className="tableaux">
          <table className="detail-table">
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

    </div>
            


            <div className="buttons-container">
                <button type="button" className="btn">Retour</button>
                <button type="submit" className="btn">All</button>
                <button type="button" className="btn">Del</button>
                <button type="submit" className="btn">OK</button>
            </div>
        </>
    );
}

export default DetailCommande;
