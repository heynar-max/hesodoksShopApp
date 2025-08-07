import { Button,   Layout, Text } from '@ui-kitten/components'

import { CustomIcon } from '../../components/ui/CustomIcon';
import { useAuthStore } from '../../store/auth/useAuthStore';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';

export const HomeScreen = () => {

    const { logout } = useAuthStore();

    getProductsByPage(0);

    return (
        <Layout style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text> Home </Text>
            
            <Button
                accessoryLeft={<CustomIcon name="log-in-outline" size={20} color="#f7f7f9ff"  />}
                onPress={ logout }
            >
                cerrar sesion
            </Button>
        </Layout>
    )
}
