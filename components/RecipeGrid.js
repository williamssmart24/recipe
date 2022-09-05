import { View, FlatList, } from 'react-native'
import RecipeGridItem from './RecipeGridItem'

export default function RecipeGrid({recipes, navigation}) {
    return (
        <View style={{ flex: 1, marginTop:10}}>
            <FlatList
                data={recipes}
                numColumns={2}
                style={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: 'space-evenly',
                    paddingVertical: 10,
                }}
                keyExtractor = {(item, index) => (index + 100).toString()}
                //columnWrapperStyle={{ backgroundColor: 'red' }}
                renderItem={({ item, index }) => <RecipeGridItem recipe={item} onPress={() => navigation.navigate('Details', {
                    recipe: item,
                })} />}
            />
        </View>
    )
}