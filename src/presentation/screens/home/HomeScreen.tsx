import { Text } from '@ui-kitten/components'


import { useAuthStore } from '../../store/auth/useAuthStore';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { useQuery } from '@tanstack/react-query';
import { MainLayout } from '../../layouts/MainLayout';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { ProductList } from '../../components/products/ProductList';

export const HomeScreen = () => {

    const { logout } = useAuthStore();

    const {isLoading, data: products = []} = useQuery({
        queryKey: ['products', 'infinite'],
        staleTime: 1000 * 60 * 60, // 1 hour
        queryFn: () => getProductsByPage(0),
    });


    return (
        <MainLayout
            title='HesoShop - products'
            subTitle='Aplicacion administrativa'
            >
                {
                    isLoading
                    ?(<FullScreenLoader/>)
                    : <ProductList products={products} />
                }
            

        </MainLayout>
    )
}