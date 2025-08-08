import { API_URL } from '../../config/api/hesoApi';
import type { Product } from '../../domain/entities/product';
import type  { HesoProduct } from '../interfaces/heso-products.response';



export class ProductMapper {

    static hesoProductToEntity( hesoProduct: HesoProduct ):Product {

    return {
        id: hesoProduct.id,
        title: hesoProduct.title,
        price: hesoProduct.price,
        description: hesoProduct.description,
        slug: hesoProduct.slug,
        inStock: hesoProduct.inStock,
        sizes: hesoProduct.sizes,
        gender: hesoProduct.gender,
        tags: hesoProduct.tags,
        categoryId: hesoProduct.categoryId,
        ProductImage: hesoProduct.ProductImage.map(
            image => `${API_URL}/api/product-image/${image.url}` 
        )
    }

    }


}