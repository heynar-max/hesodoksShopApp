import { StyleSheet, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { CustomIcon } from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const RegisterScreen = ({ navigation }:Props) => {
    const { height } = useWindowDimensions();

    return (
        <Layout style={styles.container}>
        <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: height * 0.30 }]}>
            
            <Layout style={styles.headerContainer}>
            <Text category='h1'>Crear cuenta</Text>
            <Text category='p2'>Por favor, crea una cuenta continuar</Text>
            </Layout>

            <Layout style={styles.inputContainer}>
            <Input
                placeholder="Nombre Completo"
                accessoryLeft={<CustomIcon name="person-outline" />}
                style={styles.input}
            />
            <Input
                placeholder="Correo electrónico"
                keyboardType="email-address"
                autoCapitalize="none"
                accessoryLeft={<CustomIcon name="mail-outline" />}
                style={styles.input}
            />
            <Input
                placeholder="Contraseña"
                autoCapitalize="none"
                secureTextEntry
                accessoryLeft={<CustomIcon name="lock-closed-outline" />}
                style={styles.input}
            />
            </Layout>

            <Layout style={styles.spacer} />

            <Button
            accessoryRight={<CustomIcon name="arrow-forward-outline" white />}
            onPress={() => {}}
            >
            Crear
            </Button>

            <Layout style={styles.bottomSpacer} />

            <Layout style={styles.signupContainer}>
            <Text>¿ya tienes una cuenta? </Text>
            <Text
                status="primary"
                category="s1"
                onPress={() => navigation.goBack()}
            >
                {' '}
            Ingresar{' '}
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
