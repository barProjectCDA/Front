import { useState } from 'react';
import styles from '../../assets/styles/CommandHub.module.css'
import { Product, Extra } from './interfaces';

interface ExtraModalProps {
    selectedProduct: null | Product;
    addToOrder: (product: Product, selectedExtras: Extra[]) => void;
    setIsModalOpen: (value: boolean) => void;
    isModalOpen: boolean;
    setSelectedExtras: (value: Extra[]) => void;
    selectedExtras: Extra[];
}

interface ButtonExtraProps {
    setSelectedExtras: (value: Extra[]) => void;
    selectedExtras: Extra[];
    extra: Extra;
}

export const ExtraModal: React.FC<ExtraModalProps> = ({
    selectedProduct,
    setIsModalOpen,
    isModalOpen,
    addToOrder,
    setSelectedExtras,
    selectedExtras
}) => {
    if (!isModalOpen || !selectedProduct) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalExtra}>
                <p>Suppléments {selectedProduct.name}</p>
                <ul>
                    {selectedProduct.extras.map((extra) => (
                        <li key={extra.idExtra}>
                            <ButtonExtra setSelectedExtras={setSelectedExtras} selectedExtras={selectedExtras} extra={extra} />
                        </li>
                    ))}
                </ul>
                <button onClick={() => {
                    addToOrder(selectedProduct, selectedExtras);
                    setIsModalOpen(false);
                    setSelectedExtras([]);
                }}>Valider</button>
                <button onClick={() => setIsModalOpen(false)}>Fermer</button>
            </div>
        </div>
    );
};

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