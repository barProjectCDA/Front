import { useEffect, useState } from 'react';
import styles from '../assets/styles/Home.module.css';
import { Method, useFetch } from '../hooks/Fetch';


interface Category {
    categoryId: number;
    name_category: string;
    subCategories: Category[];
}

interface Product {
    productId: number;
    name: string;
    price: number;
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



function Home() {
    const [searchCategoryId, setSearchCategoryId] = useState<number | null>(null);
    const [subCategories, setSubcategories] = useState<Category[]>([]);
    const { runFetch: fetchProduct, loading: loadingProduct, error: errorProduct, data: dataProduct, setData: setDataProduct } = useFetch<Product[]>(`http://localhost:8081/product/category/${searchCategoryId}`, Method.Get)
    const { runFetch, loading, error, data } = useFetch<Category[]>("http://localhost:8081/category", Method.Get)
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const handleCategoryClick = (category: Category) => {
        if (category.subCategories && category.subCategories.length > 0) {
            setSubcategories(category.subCategories);
            setSearchCategoryId(null);
        } else {
            setDataProduct(null)
            setSubcategories([]);
            setSearchCategoryId(category.categoryId);
        }
    };

    const handleProductClick = (product: Product) => {
        setSelectedProducts(prevProducts => [...prevProducts, product]);
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
                        {selectedProducts.map((product, index) => (
                            <div tabIndex={0} key={index} className={styles.row}>
                                <div className={styles.columnNumber}><p>{index + 1}</p></div>
                                <div className={styles.columnProduct}><p>{product.name}</p></div>
                                <div className={styles.columnPrice}><p>{product.price} €</p></div>
                                <div className={styles.columnState}><p>Non payé</p></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.commandDetails}>
                    {/* <p className={styles.tableInfo}>Table: {order.client_table.id_client_table}</p>
                <p className={styles.totalPrice}>Total: {order.total_price()} €</p> */}
                </div>
            </section>
            <section className={styles.buttonSection}>
                <div className={styles.staticButtonDiv}>
                    <div className={styles.mainStaticButtonDiv}>
                        <button className={`${styles.mainStaticButton} ${styles.tableButton}`}>Table</button>
                        <button className={`${styles.mainStaticButton} ${styles.cancelButton}`}>Annuler</button>
                        <button className={`${styles.mainStaticButton} ${styles.sendButton}`}>Envoyer</button>
                    </div>
                    <div className={styles.secondStaticButtonDiv}>
                        {data?.map((category) => (<button onClick={() => handleCategoryClick(category)} className={styles.secondStaticButton}>{category.name_category}</button>))}
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
    data,
    error,
    loading }) => {


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
                    <button onClick={() => handleProductClick(product)} key={product.productId} className={styles.variableButton}>
                        {product.name}
                    </button>
                ))
            )}
        </div>
    );
}

export default Home;
