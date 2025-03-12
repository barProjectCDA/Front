import { useEffect, useState } from 'react';
import styles from '../../assets/styles/CommandHub/ListCard.module.css'
import { FetchProduct, Category, Product } from './interfaces';

interface ListCardProps extends FetchProduct {
    categoryId: number | null;
    subCategories: Category[];
    handleCategoryClick: (category: Category) => void;
    handleProductClick: (product: Product) => void;
    currentPageProduct: number;
    setCurrentPageProduct: (value: number) => void
}

export const ListCard: React.FC<ListCardProps> = ({
    categoryId,
    subCategories,
    handleCategoryClick,
    handleProductClick,
    data,
    currentPageProduct, 
    setCurrentPageProduct
}) => {
    /**
     * Pagination avec 16 @Product par page.
     */

    const [cardProductPerPage, setCardProductPerPage] = useState<number>(16)
    const indexOfLastCard = currentPageProduct * cardProductPerPage;
    const indexOfFirstCard = indexOfLastCard - cardProductPerPage;
    const currentCards = data?.slice(indexOfFirstCard, indexOfLastCard);
    const numberOfPage = data ? Math.ceil(data?.length / cardProductPerPage) : 0;

    useEffect(() => {
        if (((currentPageProduct === 1) || (currentPageProduct === numberOfPage))) {
            setCardProductPerPage(15);
        }
        if (currentPageProduct < numberOfPage && currentPageProduct>1) {
            setCardProductPerPage(14);
        }
        console.log(numberOfPage);
    }, [currentPageProduct, numberOfPage]);

    return (
        <div className={styles.variableButtonDiv}>
            {categoryId === null ? (
                subCategories.map((category) => (
                    <button style={{ backgroundColor: category.cssHexadecimalColor }} key={category.categoryId} onClick={() => {handleCategoryClick(category);}} className={styles.variableButton}>
                        {category.name_category}
                    </button>
                ))
            ) : (
                currentCards?.map((product) => (
                    <button style={{ backgroundColor: product.cssHexadecimalColor }} key={product.productId} onClick={() => handleProductClick(product)} className={styles.variableButton}>
                        {product.name}
                    </button>
                ))
            )}
            {currentPageProduct < numberOfPage && (
                <button className={styles.nextButtonProduct} onClick={() => setCurrentPageProduct(currentPageProduct + 1)}>
                    Suivant
                </button>
            )}

            {currentPageProduct > 1 && (
                <button className={styles.previousButtonProduct} onClick={() => setCurrentPageProduct(currentPageProduct - 1)}>
                    Précédent
                </button>
            )}

        </div>
    );
}
