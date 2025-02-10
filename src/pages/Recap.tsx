import '../assets/styles/Recap.css'

function Recap() {

    return(

        <>
        <h2>Récapitulatif des commandes</h2>
        
        <div>
            <table className='commandes-table'>
                <thead>
                    <tr>
                        <th>N° Commande</th>
                        <th>Prix</th>
                        <th>Statut</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>

        <div className="buttons-container">
            <button type="button" className="btn-retour">Retour</button>
            <button type="submit" className="btn-valider">Valider</button>
        </div>
        </>
    )
}

export default Recap;
