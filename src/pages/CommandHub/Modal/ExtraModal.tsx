import { useState } from 'react';
import { Product, Extra, ModalState} from '../interfaces';
import { Modal } from '../../../components/Modal';

interface ExtraModalContent {
    selectedProduct: Product;
    addToOrder: (product: Product, selectedExtras: Extra[]) => void;
    setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
    setSelectedExtras: (value: Extra[]) => void;
    selectedExtras: Extra[];
    modalState: ModalState;
}

interface ButtonExtraProps {
    setSelectedExtras: (value: Extra[]) => void;
    selectedExtras: Extra[];
    extra: Extra;
}

export const ExtraModal: React.FC<ExtraModalContent> = ({ selectedProduct, setSelectedExtras, selectedExtras, addToOrder, setModalState, modalState}) => {

    return (
        <Modal title='Suppléments' modalState={modalState} setModalState={setModalState}>
            <ul>
            {selectedProduct?.extras.map((extra) => (
                <li key={extra.idExtra}>
                    <ButtonExtra setSelectedExtras={setSelectedExtras} selectedExtras={selectedExtras} extra={extra} />
                </li>
            ))}
            </ul>
            <button onClick={() => {
                { addToOrder(selectedProduct, selectedExtras) };
                setModalState({isOpen: false, type:"none"});
                setSelectedExtras([]);
            }}>Valider</button>
        </Modal>
    )
}

export const ButtonExtra: React.FC<ButtonExtraProps> = ({ setSelectedExtras, selectedExtras, extra }) => {

    const [countExtra, setCountExtra] = useState(0);

    return (
        <button onClick={() => {
            setSelectedExtras([...selectedExtras, extra]),
                setCountExtra(countExtra + 1);
        }}>
            {extra.extraName} {extra.extraPrice}€ {"x " + countExtra};
        </button>
    )
}
