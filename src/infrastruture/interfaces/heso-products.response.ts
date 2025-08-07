
export interface offProduct {
    total:    number;
    offset:   number;
    limit:    number;
    products: HesoProduct[];
}

export interface HesoProduct {
    id:           string;
    title:        string;
    description:  string;
    inStock:      number;
    price:        number;
    sizes:        Size[];
    slug:         string;
    tags:        string;
    gender:       string;
    categoryId:   string;
    ProductImage: ProductImage[];
}

export interface ProductImage {
    id:        number;
    url:       string;
    productId: string;

}
export enum Size {
    L = "L",
    M = "M",
    Mug = "MUG",
    S = "S",
    Xl = "XL",
    Xs = "XS",
    Xxl = "XXL",
}


