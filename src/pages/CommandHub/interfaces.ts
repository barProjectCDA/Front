export interface Category {
    categoryId: number;
    name_category: string;
    subCategories: Category[];
}

export interface Extra {
    idExtra: number;
    extraName: string;
    extraPrice: number;
}

export interface Product {
    productId: number;
    name: string;
    price: number;
    extras: Extra[];
}

export interface FetchProduct {
    data: Product[] | null;
    error: String | null;
    loading: boolean
}