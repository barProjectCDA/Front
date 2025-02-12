import useFetch from "../hooks/Fetch";

type APIchat = {
    flagId: number;
    flag: string;
};

const ApiSimple = () => {

    const { data: APIchat, loading, error } = useFetch<APIchat[]>("http://localhost:8080/api/auth/flags");

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        
        <div>
            <h1>API simple</h1>
            <div>
                {APIchat?.slice(0, 5).map((APIchat) => (
                <>    
                    <p>{APIchat.flagId}</p>
                    <p>{APIchat.flag}</p>
                </>
                ))}
            </div>
        </div>
    );
};

export default ApiSimple;
