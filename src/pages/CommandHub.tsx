import { useEffect, useState } from 'react';
import styles from '../../assets/styles/CommandHub.module.css';
import { Method, useFetch } from '../hooks/Fetch';

interface Category {
    categoryId: number;
    name_category: string;
    subCategories: Category[];
}

interface Extra {
    idExtra: number;
    extraName: string;
    extraPrice: number;
}

interface Product {
    productId: number;
    name: string;
    price: number;
    extras: Extra[];
}

interface FetchProduct {
    data: Product[] | null;
    error: String | null;
    loading: boolean
}

interface ListCardProps extends FetchProduct {
    categoryId: number | null;
    subCategories: Category[];
    handleCategoryClick: (category: Category) => void;
    handleProductClick: (product: Product) => void;
}

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


function Home() {
    const [searchCategoryId, setSearchCategoryId] = useState<number | null>(null);
    const [subCategories, setSubcategories] = useState<Category[]>([]);
    const { runFetch: fetchProduct, loading: loadingProduct, error: errorProduct, data: dataProduct, setData: setDataProduct } = useFetch<Product[]>(`http://localhost:8081/product/category/${searchCategoryId}`, Method.Get);
    const { runFetch, loading, data } = useFetch<Category[]>("http://localhost:8081/category", Method.Get);
    const [order, setOrder] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);

    const handleCategoryClick = (category: Category) => {
        if (category.subCategories && category.subCategories.length > 0) {
            setSubcategories(category.subCategories);
            setSearchCategoryId(null);
        } else {
            setDataProduct(null);
            setSubcategories([]);
            setSearchCategoryId(category.categoryId);
        }
    };

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);

        if (product.extras.length > 0) {
            setIsModalOpen(true);
        } else {
            addToOrder(product, []);
        }
    };

    const addToOrder = (product: Product, selectedExtras: Extra[]) => {
        const updatedProduct = {
            ...product,
            extras: selectedExtras,
            price: product.price + selectedExtras.reduce((sum, extra) => sum + extra.extraPrice, 0)
        };

        setOrder(prevOrder => [...prevOrder, updatedProduct]);
        setTotalPrice(prevTotal => prevTotal + updatedProduct.price);
    };

    useEffect(() => {
        runFetch(null);
    }, []);

    useEffect(() => {
        if (searchCategoryId !== null) {
            fetchProduct(null);
        }
    }, [searchCategoryId]);

    if (loading) return <p>Chargement...</p>;

    return (
        <>
            <section className={styles.tableSection}>
                <div className={styles.table}>
                    <div className={`${styles.header} ${styles.row}`}>
                        <div className={styles.columnNumber}><p>n°</p></div>
                        <div className={styles.columnProduct}><p>Produit</p></div>
                        <div className={styles.columnPrice}><p>Prix</p></div>
                        <div className={styles.columnState}><p>Payé</p></div>
                    </div>
                    <div className={styles.overflowTable}>
                        {order.map((product, index) => (
                            <>
                                <div tabIndex={0} key={index} className={styles.row}>
                                    <div className={styles.columnNumber}><p>{index + 1}</p></div>
                                    <div className={styles.columnProduct}><p>{product.name}</p></div>
                                    <div className={styles.columnPrice}><p>{product.price} €</p></div>
                                    <div className={styles.columnState}><p>Non payé</p></div>
                                </div>
                                {product.extras.map((extra, indexExtra) => (
                                    <div tabIndex={0} key={indexExtra} className={`${styles.row} ${styles.extra}`} >
                                        <div className={styles.columnNumber}></div>
                                        <div className={styles.columnExtra}><p>Supplement {extra.extraName}</p></div>
                                        <div className={styles.columnPrice}><p>{extra.extraPrice} €</p></div>
                                        <div className={styles.columnState}><p></p></div>
                                    </div>
                                ))}
                            </>
                        )
                        )}
                    </div>
                </div>
                <div className={styles.commandDetails}>
                    <p className={styles.tableInfo}>Table: 1</p>
                    <p className={styles.totalPrice}>Total: {totalPrice.toFixed(2)} €</p>
                </div>
                <ExtraModal
                    selectedProduct={selectedProduct}
                    addToOrder={addToOrder}
                    setIsModalOpen={setIsModalOpen}
                    isModalOpen={isModalOpen}
                    selectedExtras={selectedExtras}
                    setSelectedExtras={setSelectedExtras}
                />
            </section>
            <section className={styles.buttonSection}>
                <div className={styles.staticButtonDiv}>
                    <div className={styles.mainStaticButtonDiv}>
                        <button className={`${styles.mainStaticButton} ${styles.tableButton}`}>Table</button>
                        <button className={`${styles.mainStaticButton} ${styles.cancelButton}`}>Annuler</button>
                        <button className={`${styles.mainStaticButton} ${styles.sendButton}`}>Envoyer</button>
                    </div>
                    <div className={styles.secondStaticButtonDiv}>
                        {data?.map((category) => (
                            <button key={category.categoryId} onClick={() => handleCategoryClick(category)} className={styles.secondStaticButton}>
                                {category.name_category}
                            </button>
                        ))}
                    </div>
                </div>
                <ListCard
                    categoryId={searchCategoryId}
                    subCategories={subCategories}
                    handleCategoryClick={handleCategoryClick}
                    handleProductClick={handleProductClick}
                    data={dataProduct}
                    error={errorProduct}
                    loading={loadingProduct}
                />
            </section>
        </>
    );
}




const ListCard: React.FC<ListCardProps> = ({
    categoryId,
    subCategories,
    handleCategoryClick,
    handleProductClick,
    data
}) => {
    return (
        <div className={styles.variableButtonDiv}>
            {categoryId === null ? (
                subCategories.map((category) => (
                    <button key={category.categoryId} onClick={() => handleCategoryClick(category)} className={styles.variableButton}>
                        {category.name_category}
                    </button>
                ))
            ) : (
                data?.map((product) => (
                    <button key={product.productId} onClick={() => handleProductClick(product)} className={styles.variableButton}>
                        {product.name}
                    </button>
                ))
            )}
        </div>
    );
}

const ExtraModal: React.FC<ExtraModalProps> = ({
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



const ButtonExtra: React.FC<ButtonExtraProps> = ({ setSelectedExtras, selectedExtras, extra }) => {

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

export default Home;
