import React, { useEffect, useRef } from 'react';
import styles from '../../../assets/styles/CommandHub.module.css'
import { Modal } from '../../../components/Modal';
import { ModalState } from '../interfaces';

interface PropsContentTableModal{
    setCommandTable: (numberTable: number) => void;
    commandTable: number;
    modalState: ModalState
    setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

export const TableModal: React.FC<PropsContentTableModal> = ({setCommandTable, commandTable, modalState, setModalState}) => {

    const inputTable = useRef<HTMLInputElement | null>(null);
    useEffect(() => console.log(commandTable),[commandTable]);

    return(
        <>
        <Modal title="Table" modalState={modalState} setModalState={setModalState}>
            <input ref={inputTable} type="number" min={1} max={20} name="tableInput"  className={styles.tableInput}/>
            <button onClick={() => {
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
        </Modal>
        </>
    )
}