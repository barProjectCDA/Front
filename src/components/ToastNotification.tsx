import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showErrorToast = (message: string) => {
    toast.error(message, {
        position: "bottom-center",
        className: "toastError",
        progressClassName: "progressToastError",
        closeButton: false,
    });
};

export const showSuccessToast = (message: string) => {
    toast.success(message, {
        position: "bottom-center",
        className: "toastSuccess",
        progressClassName: "progressToastSuccess",
        closeButton: false,
    });
};

export const ToastWrapper = () => <ToastContainer />;