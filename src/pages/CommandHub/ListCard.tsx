import styles from '../../assets/styles/CommandHub.module.css'
import { FetchProduct, Category, Product } from './interfaces';

interface ListCardProps extends FetchProduct {
    categoryId: number | null;
    subCategories: Category[];
    handleCategoryClick: (category: Category) => void;
    handleProductClick: (product: Product) => void;
}

export const ListCard: React.FC<ListCardProps> = ({
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
