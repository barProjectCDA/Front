import useFetch from "../hooks/Fetch";

type APIchat = {
    url: string;
};

const ApiSimple = () => {

    const { data: APIchat, loading, error } = useFetch<APIchat[]>("https://api.thecatapi.com/v1/images/search");

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h1>API simple</h1>
            <div>
                {APIchat?.slice(0, 5).map((APIchat) => (
                    <img src={APIchat.url}/>
                ))}
            </div>
        </div>
    );
};

export default ApiSimple;
