import { ButtonGroup, Input, Layout, Button, useTheme } from "@ui-kitten/components"
import { MainLayout } from "../../layouts/MainLayout"
import { useQuery } from "@tanstack/react-query"
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigation";
import { getProductById } from "../../../actions/products/get-product-by-id";
import { useRef } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { FadeInImage } from "../../components/ui/FadeInImage";
import { Gender, Size } from "../../../domain/entities/product";
import { CustomIcon } from "../../components/ui/CustomIcon";
import { Text } from "react-native";
import {Formik} from 'formik';


const sizes: Size[] = [Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl, Size.Mug];
const genders: Gender[] = [Gender.Dorado, Gender.Kid, Gender.Men, Gender.Plateado, Gender.Unisex, Gender.Women]

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

export const ProductScreen = ({ route}: Props) => {
    
    const theme = useTheme();
    const productIdRef = useRef(route.params.productId)

    const { data: product} = useQuery({
        queryKey: ['product', productIdRef.current],
        queryFn:  () => getProductById(productIdRef.current),
    });

    if (!product) {
        return(<MainLayout title="Cargando..."/>)
    }
    return (

        <Formik
            initialValues={product}
            onSubmit={values => console.log(values)}
        >
            {({handleChange, handleSubmit, values, errors, setFieldValue}) =>(
                    <MainLayout
            title={values.title}
            subTitle={` Precio: ${values.price}`}
        >
            
            <ScrollView style={{flex: 1}}>

            {/* Imágenes de el producto */}
            <Layout>
                <FlatList
                data={values.ProductImage}
                keyExtractor={(item)=> item}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <FadeInImage
                    uri={item}
                    style={{ width:300, height:300, marginHorizontal:7}}
                    />
                )}
                />
            </Layout>

                {/* Formulario */}
                <Layout style={{marginHorizontal: 10}}>
                <Input
                    label="Título"
                    style={{marginVertical: 5}}
                    value={values.title}
                    onChangeText={handleChange('title')}
                />
                <Input
                    label="Slug"
                    value={values.slug}
                    style={{marginVertical: 5}}
                    onChangeText={handleChange('slug')}
                />
                <Input
                    label="Descripción"
                    value={values.description}
                    onChangeText={handleChange('description')}
                    multiline
                    numberOfLines={5}
                    style={{marginVertical: 5}}
                />
                </Layout>

                {/* Precio e inventario */}
                    <Layout>
                    <Input
                        label="Precio"
                        value={values.price.toString()}
                        onChangeText={handleChange('price')}
                        style={{flex: 1}}
                        keyboardType="numeric"
                    />

                    <Input
                        label="Inventario"
                        value={values.inStock.toString()}
                        onChangeText={handleChange('inStock')}
                        style={{flex: 1}}
                        keyboardType="numeric"
                    />
                    </Layout>

                {/* Selectores */}
                <ButtonGroup
                style={{margin: 2, marginTop: 20, marginHorizontal: 15}}
                size="small"
                appearance="outline">
                {sizes.map(size => (
                    <Button
                        onPress={() =>
                        setFieldValue(
                        'sizes',
                        values.sizes.includes(size)
                            ? values.sizes.filter(s => s !== size)
                            : [...values.sizes, size],
                        )
                    }
                    key={size}
                    style={{
                        flex: 1,
                        backgroundColor: values.sizes.includes(size)
                        ? theme['color-primary-200']
                        : undefined,
                    }}>
                    {size}
                    </Button>
                ))}
                </ButtonGroup>

                <ButtonGroup
                style={{margin: 2, marginTop: 20, marginHorizontal: 15}}
                size="small"
                appearance="outline">
                {genders.map(gender => (
                    <Button
                    onPress={() => setFieldValue('gender', gender)}
                    key={gender}
                    style={{
                        flex: 1,
                        backgroundColor: values.gender.startsWith(gender)
                        ? theme['color-primary-200']
                        : undefined,
                    }}>
                    {gender}
                    </Button>
                ))}
                </ButtonGroup>

                {/* Botón de guardar */}
                <Button
                accessoryLeft={<CustomIcon name="save-outline" white />}
                onPress={() => console.log('Guardar')}
                
                style={{margin: 15}}>
                Guardar
                </Button>

                <Text>{JSON.stringify(values, null, 2)}</Text>

                <Layout style={{height: 200}} />

                        
            </ScrollView>
        </MainLayout>
                )
            }
            
        </Formik>
        
    )
}
