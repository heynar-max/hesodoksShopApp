import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { StackNavigation } from './presentation/navigation/StackNavigation';
import { useColorScheme } from 'react-native';
import { AuthProvider } from './presentation/providers/AuthProvider';



export const HesodoksApp = () => {

    const colorScheme = useColorScheme();
    const evaTheme = colorScheme === 'dark' ? eva.dark : eva.light;

    const navigationTheme = {
        ...(colorScheme === 'dark' ? DarkTheme : DefaultTheme),
        colors: {
        ...(colorScheme === 'dark' ? DarkTheme.colors : DefaultTheme.colors),
        primary: evaTheme['color-primary-500'],
        background: evaTheme['color-basic-100'],
        card: evaTheme['color-basic-200'],
        text: evaTheme['text-basic-color'],
        border: evaTheme['color-basic-800'],
        notification: evaTheme['color-primary-500'],
        },
    };
    
    return (
        <>
        <ApplicationProvider  {...eva} theme={evaTheme}>
            <NavigationContainer theme={navigationTheme}>
                <AuthProvider>
                    <StackNavigation/>
                </AuthProvider>
            </NavigationContainer>
        </ApplicationProvider>
        </>
        
        
            
        
    )
}
