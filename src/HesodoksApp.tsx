import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './presentation/navigation/StackNavigation';
import { useColorScheme } from 'react-native';



export const HesodoksApp = () => {

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? eva.dark : eva.light;
    
    return (
        <>
        <ApplicationProvider  {...eva} theme={theme}>
            <NavigationContainer>
                <StackNavigation/>
            </NavigationContainer>
        </ApplicationProvider>
        </>
        
        
            
        
    )
}
