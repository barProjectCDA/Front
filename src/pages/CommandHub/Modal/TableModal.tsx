import React, { useEffect, useRef } from 'react';
import { Modal } from '../../../components/Modal';
import { ModalState } from '../interfaces';
import styles from '../../../assets/styles/commandHub/modals/TableModal.module.css'

interface PropsContentTableModal {
    setCommandTable: (numberTable: number) => void;
    commandTable: number;
    modalState: ModalState
    setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

export const TableModal: React.FC<PropsContentTableModal> = ({ setCommandTable, commandTable, modalState, setModalState }) => {

    const inputTable = useRef<HTMLInputElement | null>(null);
    useEffect(() => console.log(commandTable), [commandTable]);

    return (
        <>
            <Modal title="Table" modalState={modalState} setModalState={setModalState}>
                <div className={styles.contentTableModal}>
                    <input ref={inputTable} type="number" min={1} max={20} name="tableInput" className={styles.tableInput} />
                    <div className={styles.buttonDivTableModal}>
                        <button className={styles.buttonValidateTableModal} onClick={() => {
                            if (inputTable.current) {
                                const tableNumber = Number(inputTable.current.value)
                                if (tableNumber >= 1 && tableNumber <= 20) {
                                    setCommandTable(tableNumber);
                                    setModalState({ isOpen: false, type: "none" });
                                } else {
                                    "Table inexistante"
                                }
                            }
                        }}>Valider</button>
                        <button onClick={() => { setModalState({ isOpen: false }); setModalState({ isOpen: false, type: "none" }); }} className={styles.buttonCloseTableModal}>Fermer</button>
                    </div>
                </div>
            </Modal>

        </>
    )
}