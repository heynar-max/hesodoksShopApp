import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { ProductScreen } from '../screens/product/ProductScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';


export type RootStackParams = {
    HomeScreen: undefined;
    LoadingScreen: undefined;
    ProductScreen: {productId: string};
    LoginScreen: undefined;
    RegisterScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation =() =>  {
    return (
        <Stack.Navigator 
            initialRouteName='HomeScreen'        
            screenOptions={{
                    headerShown: false
                }}
        >
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        </Stack.Navigator>
    );
}