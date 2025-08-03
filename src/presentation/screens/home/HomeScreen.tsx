import { Button,   Layout, Text } from '@ui-kitten/components'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const HomeScreen = () => {
    return (
        <Layout style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text> Home </Text>
            
            <Button
                accessoryLeft={<FontAwesome name="facebook" size={20} color="#f7f7f9ff"  />}
            >
                cerrar sesion
            </Button>
        </Layout>
    )
}
