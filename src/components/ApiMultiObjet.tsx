import useFetch from "../hooks/Fetch";

type BitcoinPrice = {
    bpi: {
        USD: {
            rate_float: number;
            description: string;
        };

    };
};

const ApiMultiObjet = () => {

    const { data, loading, error } = useFetch<BitcoinPrice>("https://api.coindesk.com/v1/bpi/currentprice.json");

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h1>API objet JSON structuré en objets imbriqués</h1>  {/* objet dans des objets */}
            <h2>{data?.bpi.USD.description}</h2>
            <h2>💰 {data?.bpi.USD.rate_float.toFixed(2)} $</h2>
        </div>
    );
};

export default ApiMultiObjet;
