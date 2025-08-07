import { hesoApi } from "../../config/api/hesoApi";
import { Product } from "../../domain/entities/product";
import type { offProduct } from "../../infrastruture/interfaces/heso-products.response";
import { ProductMapper } from "../../infrastruture/mappers/product.mapper";


export const getProductsByPage = async (page: number, limit: number = 20): Promise<Product[]> => {

    try {

        const { data } = await hesoApi.get<offProduct>(`/api/products?offset=${ page * 10 }&limit=${ limit }`);
        const products = data.products.map(ProductMapper.hesoProductToEntity);
        return products;

    } catch (error) {
        console.log(error);
        throw new Error('Error getting products');

    }
};