import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../components/ToastNotification";

export enum Method {
    Post = "POST",
    Get = "GET",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
    Options = "OPTIONS"
}


export function useFetch<T>(url: string, method: Method) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);
    

    const runFetch = async (body: any) => {
        setLoading(true);
        setError(null);

        try {

            const token = localStorage.getItem("token");

            let options: RequestInit = {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token ? `Bearer ${token}` : "",
                },
            }

            if (method === Method.Post) {

                options.body = JSON.stringify(body)

                options.headers = { "Content-Type": "application/json" }


            }

            const response = await fetch(url, options);

            const responseData = await response.json();

            
            if (!response.ok) {
                throw new Error(responseData.message || "Erreur inconnue");
            }
            setData(responseData);
            showSuccessToast(responseData.message);
            return responseData;

        } catch (err: any) {
            setError(err.message);
            showErrorToast(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { runFetch, loading, error, data, setData};
}
