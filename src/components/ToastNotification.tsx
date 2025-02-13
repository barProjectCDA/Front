import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Fonction pour afficher un toast d'erreur
export const showErrorToast = (message: string) => {
    toast.error(message, {
        position: "bottom-center",
        className: "toastError",
        progressClassName: "progressToastError",
        closeButton: false,
    });
};

// Fonction pour afficher un toast de succès (au cas où tu en aurais besoin)
export const showSuccessToast = (message: string) => {
    toast.success(message, {
        position: "bottom-center",
        className: "toastSuccess",
        progressClassName: "progressToastSuccess",
        closeButton: false,
    });
};

// Composant ToastContainer global
export const ToastWrapper = () => <ToastContainer />;