import { View, FlatList, } from 'react-native'
import RecipeGridItem from './RecipeGridItem'

export default function RecipeGrid({recipes}) {
    return (
        <View style={{ flex: 1, marginVertical: 10 }}>
            <FlatList
                data={recipes}
                numColumns={2}
                style={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: 'space-evenly',
                    paddingVertical: 10,
                }}
                //columnWrapperStyle={{ backgroundColor: 'red' }}
                renderItem={({ item, index }) => <RecipeGridItem recipe={item} index={index} />}
            />
        </View>
    )
}