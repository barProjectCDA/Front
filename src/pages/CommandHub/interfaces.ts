export interface Category {
    categoryId: number;
    name_category: string;
    subCategories: Category[];
    cssHexadecimalColor: string;
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
    cssHexadecimalColor: string;
}

export interface FetchProduct {
    data: Product[] | null;
    error: String | null;
    loading: boolean
}

export interface ModalState { isOpen: boolean; type?: ModalType;}

export type ModalType = "none"|"extra"|"table";
