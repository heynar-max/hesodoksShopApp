Este es un nuevo proyecto [**React Native**](https://reactnative.dev), iniciado utilizando[`@react-native-community/cli`](https://github.com/react-native-community/cli).
```sh
# Using npm
npx @react-native-community/cli init nombredelproyecto

```

# Empezando

> **Note**: asegúrese de haber completado la guía [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment)  antes de continuar.

## Step 1: iniciacion de este Proyecto

Primero, necesitarás ejecutar Metro , la herramienta de compilación de JavaScript para React Native.

Para iniciar el servidor de desarrollo Metro, ejecute el siguiente comando desde la raíz de su proyecto React Native:

```sh
# Using npm
npm start android

```

## Paso 2: Stack navigator

se instala el stack
```sh
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install @react-native-masked-view/masked-view
```
se importan en el punto mas alto de aplicación app
 ```sh
import 'react-native-gesture-handler';
```
se pone en la parte mas alta de la aplicación app
```sh
<NavigationContainer>
```
se crea archivo creat navigator.

## Step 3: Instalación de los fundamento de react-navigation
-- [**React Navigation**](https://reactnavigation.org/) --

```sh
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
```

en la carpeta MainActivity.kt se copia estas lineas
```sh
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
    }
```
debe importar este paquete
```sh
import android.os.Bundle;

```

## Step 4: Instalación ui kitten
se debe instalar los permisos, por que si no la aplicacion no los puede usar

-- [**react-ui-kitten**](https://akveo.github.io/react-native-ui-kitten/) --

```sh
npm i @ui-kitten/components @eva-design/eva react-native-svg

```

se instala iconos de esa aplicacion
```sh
    npm i @ui-kitten/eva-icons react-native-svg
```

## Paso 5: instalar los iconos vector

-- [**Iconos Vector**](https://github.com/oblador/react-native-vector-icons) --
```sh
npm install react-native-vector-icons
```
en la carpeta android/app/build.gladle,  pone esta linea
 ```sh
project.ext.vectoricons = [
    iconFontNames: [ 'Ionicons.ttf' ] // Specify font files
]

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle");
```

para saber que iconos usar donde estan todos es esta pagina
-- [**Iconos Ionicons**](https://ionic.io/ionicons) -

## Paso 5: instalar reactnative-dotenv

-- [**react-native-dotenv**](https://www.npmjs.com/package/react-native-dotenv) --
```sh
npm i react-native-dotenv
```

## Paso 6: instalar axios

```sh
npm i axios
```