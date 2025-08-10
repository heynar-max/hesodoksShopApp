import {FlatList, Image,} from 'react-native';
import { FadeInImage } from '../ui/FadeInImage';

interface Props {
    ProductImage: string[];
}

export const ProductImages = ({ProductImage}: Props) => {
    return (
        <>
        {
            (ProductImage.length === 0)
            ? <Image source={ require('../../../assets/no-product-image.png')} style={{ width:300, height:300, marginHorizontal:7}}/>
            : <FlatList
        data={ProductImage}
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
        }
        </>
    );
};