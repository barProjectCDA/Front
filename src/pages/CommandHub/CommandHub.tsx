import { useEffect, useState } from 'react';
import styles from '../../assets/styles/CommandHub.module.css'
import { Method, useFetch } from '../../hooks/Fetch';
import React from 'react';
import { ExtraModal } from './Modal/ExtraModal';
import { ListCard } from './ListCard';
import { Category, Product, Extra, ModalState } from './interfaces';
import { TableModal } from './Modal/TableModal';

function CommandHub() {
    const [searchCategoryId, setSearchCategoryId] = useState<number | null>(null);
    const [subCategories, setSubcategories] = useState<Category[]>([]);
    const { runFetch: fetchProduct, loading: loadingProduct, error: errorProduct, data: dataProduct, setData: setDataProduct } = useFetch<Product[]>(`http://localhost:8081/product/category/${searchCategoryId}`, Method.Get);
    const { runFetch, loading, error, data } = useFetch<Category[]>("http://localhost:8081/category", Method.Get);
    const [order, setOrder] = useState<Product[]>([]);
    const [modalState, setModalState] = useState<ModalState>({ isOpen: false, type: "none" });
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [selectedIndexExtra, setSelectedIndexExtra] = useState<number | null>(null);
    const [commandTable, setCommandTable] = useState<number>(0)

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
            setModalState({ isOpen: true, type: "extra" });
        } else {
            addToOrder(product, []);
        }
    };

    const addToOrder = (product: Product, selectedExtras: Extra[]) => {
        const updatedProduct = {
            ...product,
            extras: selectedExtras,
            price: product.price
        };
        setOrder(prevOrder => [...prevOrder, updatedProduct]);
    };


    const calculateTotalPriceProduct = (product: Product) => {
        return product.price + product.extras.reduce((sum, extra) => sum + extra.extraPrice, 0);
    }

    const calculateTotalPrice = () => {
        return order.reduce((total, product) => {
            const extrasTotal = product.extras.reduce((sum, extra) => sum + extra.extraPrice, 0);
            return total + product.price + extrasTotal;
        }, 0);
    };

    const cancelProduct = () => {
        if (selectedIndex !== null && selectedIndexExtra === null) {

            setOrder(prevOrder => prevOrder.filter((_, index) => index !== selectedIndex));
            setSelectedProduct(null);
            setSelectedIndex(null);

        } else if (selectedIndex !== null && selectedIndexExtra !== null) {

            setOrder(prevOrder =>
                prevOrder.map((product, index) => {
                    if (index === selectedIndex) {
                        return {
                            ...product,
                            extras: product.extras.filter((_, i) => i !== selectedIndexExtra),
                        };
                    }
                    return product;
                })
            );
            setSelectedIndexExtra(null);
            setSelectedProduct(null);
        }
    }

    const resetSelectedIndex = (e: any) => {
        if (e.relatedTarget?.name === "cancelButton") {
            cancelProduct();
        }
        if (e.relatedTarget?.id === "extraDiv") {
            return;
        }
        else {
            setSelectedIndex(null);
            setSelectedProduct(null);
        }
    }

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
                    <div onBlur={resetSelectedIndex} className={styles.overflowTable}>
                        {order.map((product, index) => (
                            <React.Fragment key={index}>
                                <div onFocus={() => { { setSelectedIndex(index), console.log(selectedIndex, selectedIndexExtra) } }} tabIndex={0} key={index} className={`${styles.row} ${styles.product}`}>
                                    <div className={styles.columnNumber}><p>{index + 1}</p></div>
                                    <div className={styles.columnProduct}><p>{product.name}</p></div>
                                    <div className={styles.columnPrice}><p>{calculateTotalPriceProduct(product)} €</p></div>
                                    <div className={styles.columnState}><p>Non payé</p></div>
                                </div>
                                {product.extras.map((extra, indexExtra) => (
                                    <div id='extraDiv' onFocus={() => { setSelectedIndex(index), setSelectedIndexExtra(indexExtra), console.log("IndexProduit: " + selectedIndex, "IndexExtra: " + selectedIndexExtra) }} tabIndex={0} key={indexExtra} className={`${styles.row} ${styles.extra}`} >
                                        <div className={styles.columnNumber}></div>
                                        <div className={styles.columnExtra}><p>Supplement {extra.extraName}</p></div>
                                        <div className={styles.columnPrice}><p>{extra.extraPrice} €</p></div>
                                        <div className={styles.columnState}><p></p></div>
                                    </div>
                                ))}
                            </React.Fragment>
                        )
                        )}
                    </div>
                </div>
                <div className={styles.commandDetails}>
                    <p className={styles.tableInfo}>Table: {commandTable}</p>
                    <p className={styles.totalPrice}>Total: {calculateTotalPrice().toFixed(2)} €</p>
                </div>
                <TableModal
                    setModalState={setModalState}
                    modalState={modalState}
                    setCommandTable={setCommandTable}
                    commandTable={commandTable}
                />
                {selectedProduct !== null && <ExtraModal
                    modalState={modalState}
                    selectedExtras={selectedExtras}
                    setSelectedExtras={setSelectedExtras}
                    selectedProduct={selectedProduct}
                    setModalState={setModalState}
                    addToOrder={addToOrder} />
                }
            </section>
            <section className={styles.buttonSection}>
                <div className={styles.staticButtonDiv}>
                    <div className={styles.mainStaticButtonDiv}>
                        <button onClick={() => setModalState({ isOpen: true, type: "table" })} className={`${styles.mainStaticButton} ${styles.tableButton}`}>Table</button>
                        <button name='cancelButton' onClick={cancelProduct} className={`${styles.mainStaticButton} ${styles.cancelButton}`}>Annuler</button>
                        <button className={`${styles.mainStaticButton} ${styles.sendButton}`}>Envoyer</button>
                    </div>
                    <div className={styles.secondStaticButtonDiv}>
                        {data?.map((category) => (
                            <button style={{backgroundColor: category.cssHexadecimalColor}} key={category.categoryId} onClick={() => handleCategoryClick(category)} className={styles.secondStaticButton}>
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

export default CommandHub;
