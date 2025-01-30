import { useState, useEffect } from "react";

const Fetch = <T,>(url: string) => {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
        try {

            const response = await fetch(url);
            const result = await response.json();
            
            setLoading(true);

            if (!response.ok) { throw new Error(`Erreur ${response.status}: ${response.statusText}`); }

            setData(result);

        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
    };

export default Fetch;
