import React, { ReactNode } from 'react';
import styles from '../assets/styles/Modal.module.css'
import { ModalState } from '../pages/CommandHub/interfaces';

interface ModalProps {
    title: string;
    children: ReactNode
    modalState: ModalState;
    setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

export const Modal: React.FC<ModalProps> = ({children, title, modalState,

}) => {
    if (!modalState.isOpen) {
        return
    }
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.headerModal}>
                    <p>{title}</p>
                </div>
                <div className={styles.contentModal}>
                    {children}
                </div>
                <div className={styles.footerModal}></div>
            </div>
        </div>
    );
};
