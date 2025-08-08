export interface offTProduct {
    total:    number;
    offset:   number;
    limit:    number;
    products: [];
}

export interface Product {
    id:           string;
    title:        string;
    description:  string;
    inStock:      number;
    price:        number;
    sizes:        Size[];
    slug:         string;
    tags:        string;
    gender:       Gender;
    categoryId:   string;
    ProductImage: string[];
}

export enum Gender {
    Kid = "kid",
    Men = "men",
    Unisex = "unisex",
    Women = "women",
    Dorado = "dorado",
    Plateado = "plateado",
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