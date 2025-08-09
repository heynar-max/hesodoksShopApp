import { isAxiosError } from 'axios';
import { Product } from '../../domain/entities/product';
import { hesoApi } from '../../config/api/hesoApi';


export const updateCreateProduct = ( product: Partial<Product> ) => {

    product.inStock = isNaN( Number(product.inStock)) ? 0 : Number(product.inStock);
    product.price = isNaN( Number(product.price)) ? 0 : Number(product.price);


    if ( product.id && product.id !== 'new') {
        return updateProduct(product);
    }

        return createProduct( product );
    }


    const prepareImages = ( images: string[] ) => {

    // Todo: revisar los FILES

    return images.map(
        image => image.split('/').pop()
    )

    }

    //TODO: revisar si viene el usuario
    const updateProduct = async (product: Partial<Product>) => {
    const { id, ProductImage = [], ...rest  } = product;

    try {
        const checkedImages = prepareImages(ProductImage);
    
        const { data } = await hesoApi.patch(`/api/products/${id}`, {
        images: checkedImages,
        ...rest
        })

        return data;
        
    } catch (error) {

        if ( isAxiosError(error) ) {
        console.log(error.response?.data);
        }
        
        throw new Error('Error al actualizar el producto');

    }

    }

    const createProduct = async(product: Partial<Product>) => {

    const { ProductImage = [], ...rest  } = product;

    try {
        const checkedImages = prepareImages(ProductImage);
    
        const { data } = await hesoApi.post(`/api/products/`, {
        images: checkedImages,
        ...rest,
         categoryId: "1413fd8b-c6c0-4a6a-92dd-28475f29f689" // Siempre este valor
        });

        return data;
        
    } catch (error) {

        if ( isAxiosError(error) ) {
        console.log(error.response?.data);
        }
        
        throw new Error('Error al actualizar el producto');

    }
}