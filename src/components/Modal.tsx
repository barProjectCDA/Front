import React, { ReactNode } from 'react';
import styles from '../assets/styles/CommandHub.module.css'
import { ModalState } from '../pages/CommandHub/interfaces';

interface ModalProps {
    title: string;
    children: ReactNode
    modalState: ModalState;
    setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

export const Modal: React.FC<ModalProps> = ({children, title, modalState, setModalState

}) => {
    if (!modalState.isOpen) {
        return
    }
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalExtra}>
                <p>{title}</p>
                {children}
            <button onClick={() => setModalState({isOpen: false})} className={styles.buttonCloseModal}>Ferme</button>
            </div>
        </div>
    );
};
