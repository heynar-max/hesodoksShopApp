import React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@ui-kitten/components';

interface Props {
    name: string;         // Ej: 'facebook', 'home', etc.
    size?: number;        // Tamaño opcional, por defecto 32
    color?: string;       // Nombre del color en el theme o color HEX
    white?: boolean;      // Forzar color blanco (color-info-100)
}

export const CustomIcon = ({ name, size = 25, color, white = false }: Props) => {
    const theme = useTheme();

    let iconColor = color;

    if (white) {
        iconColor = theme['color-info-100'];
    } else if (!color) {
        iconColor = theme['text-basic-color'];
    } else {
        iconColor = theme[color] ?? color; // Si no está en el theme, se usa como está
    }

    return (
        <Ionicons
        name={name}
        size={size}
        color={iconColor}
        style={styles.icon}
        />
    );
    };

const styles = StyleSheet.create({
    icon: {
        marginVertical: 4,
    },
});