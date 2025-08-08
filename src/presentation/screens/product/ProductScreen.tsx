import { Input, Layout } from "@ui-kitten/components"
import { MainLayout } from "../../layouts/MainLayout"
import { useQuery } from "@tanstack/react-query"
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigation";
import { getProductById } from "../../../actions/products/get-product-by-id";
import { useRef } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { FadeInImage } from "../../components/ui/FadeInImage";

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

export const ProductScreen = ({ route}: Props) => {

    const productIdRef = useRef(route.params.productId)

    const { data: product} = useQuery({
        queryKey: ['product', productIdRef.current],
        queryFn:  () => getProductById(productIdRef.current),
    });

    if (!product) {
        return(<MainLayout title="Cargando..."/>)
    }
    return (
        <MainLayout
            title={product.title}
            subTitle={` Precio: ${product.price}`}
        >
            
            <ScrollView style={{flex: 1}}>

            {/* Imágenes de el producto */}
            <Layout>
                <FlatList
                data={product.ProductImage}
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
                    value={product.title}
                />
                <Input
                    label="Slug"
                    value={product.slug}
                    style={{marginVertical: 5}}
                />
                <Input
                    label="Descripción"
                    value={product.description}
                    multiline
                    numberOfLines={5}
                    style={{marginVertical: 5}}
                />
                </Layout>

                {/* Precio e inventario */}
                    <Layout>
                    <Input
                        label="Precio"
                        value={product.price.toString()}
                        style={{flex: 1}}
                        keyboardType="numeric"
                    />

                    <Input
                        label="Inventario"
                        value={product.inStock.toString()}
                        style={{flex: 1}}
                        keyboardType="numeric"
                    />
                    </Layout>

                    <Layout style={{height: 200}} />
            </ScrollView>
        </MainLayout>
    )
}
