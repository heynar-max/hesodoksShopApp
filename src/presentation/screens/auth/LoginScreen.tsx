import { Alert, StyleSheet, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { CustomIcon } from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';
import { useAuthStore } from '../../store/auth/useAuthStore';
import { useState } from 'react';


interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

export const LoginScreen = ({ navigation }:Props) => {

    const {login } = useAuthStore();
    const [isPosting, setIsPosting] = useState(false)
    const [form, setForm]= useState({
        email: '',
        password: '',
    })
    const { height } = useWindowDimensions();

    const onLogin = async () => {
        if ( form.email.length === 0 || form.password.length === 0 ) {
        return;
        }
        setIsPosting(true);
        const wasSuccessful = await login(form.email, form.password);
        setIsPosting(false);

        if ( wasSuccessful ) return;
        
        Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }

    return (
        <Layout style={styles.container}>
        <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: height * 0.35 }]}>
            
            <Layout style={styles.headerContainer}>
            <Text category='h1'>Ingresar</Text>
            <Text category='p2'>Por favor, ingrese para continuar</Text>
            </Layout>

            {/* Inputs */}
            <Layout style={styles.inputContainer}>
            <Input
                placeholder="Correo electrónico"
                keyboardType="email-address"
                autoCapitalize="none"
                value={ form.email }
                onChangeText={ (email) => setForm({ ...form, email })}
                accessoryLeft={<CustomIcon name="mail-outline" />}
                style={styles.input}
            />
            <Input
                placeholder="Contraseña"
                autoCapitalize="none"
                value={ form.password }
                onChangeText={ (password) => setForm({ ...form, password })}
                secureTextEntry
                accessoryLeft={<CustomIcon name="lock-closed-outline" />}
                style={styles.input}
            />
            </Layout>

            {/* Space */}
            <Layout style={styles.spacer} />

            {/* Button */}
            <Layout>
                <Button
                disabled={isPosting}
                accessoryRight={<CustomIcon name="arrow-forward-outline" white />}
                onPress={onLogin}
                >
                Ingresar
                </Button>
            </Layout>

            {/* Información para crear cuenta */}
            <Layout style={styles.bottomSpacer} />

            <Layout style={styles.signupContainer}>
            <Text>¿No tienes cuenta? </Text>
            <Text
                status="primary"
                category="s1"
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                {' '}
            crea una{' '}
            </Text>
            </Layout>
        </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        marginHorizontal: 40,
    },
    headerContainer: {
        marginBottom: 20,
    },
    inputContainer: {
        marginTop: 20,
    },
    input: {
        marginBottom: 10,
    },
    spacer: {
        height: 10,
    },
    bottomSpacer: {
        height: 50,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});