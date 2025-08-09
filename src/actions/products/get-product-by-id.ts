import { hesoApi } from "../../config/api/hesoApi";
import { Gender, Product, Tag } from "../../domain/entities/product";
import { HesoProduct } from "../../infrastruture/interfaces/heso-products.response";
import { ProductMapper } from "../../infrastruture/mappers/product.mapper";


const emptyProduct: Product = {
    id: '',
    title: 'Nuevo producto',
    description: '',
    price: 0,
    slug: '',
    gender: Gender.Unisex,
    sizes: [],
    inStock: 0,
    tags: [Tag.Sublimacion],
    categoryId: '',
    ProductImage: [],
}

export const getProductById = async (id: string):Promise<Product> => {

    if ( id === 'new' ) return emptyProduct;

    try {
        
        const { data } = await hesoApi.get<HesoProduct>(`/api/products/${id}`);

        return ProductMapper.hesoProductToEntity(data);


    } catch (error) {
        console.log(error);
        throw new Error(`Error getting product by id: ${ id }`);
    }

}