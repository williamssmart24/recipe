import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function RecipeGridItem({ index, recipe }) {
    return (
        <View style={{ backgroundColor: index % 2 == 0 ? 'white' : 'pink', ...style.container }}>
            <Image source={require('../assets/bg.jpg')} style={style.image} borderRadius={5} />
            <Text>{recipe.name}</Text>
            <View style={style.footerContainer}>
                <FontAwesome5 name='clock' size={14} color='#616161' />
                <Text style={style.recipeTime}>{recipe.time}</Text>

                <FontAwesome5 name='bookmark' size={18} color='#616161' style={{ marginLeft: 'auto' }} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 1,
        marginBottom: 15,
        borderRadius: 3,
        padding: 5,
    },
    image: {
        width: '100%',
        height: 150,
    },
    footerContainer: {
        flexDirection: 'row', alignItems: 'center', marginVertical: 5
    },
    recipeTime:{
        marginLeft: 5, fontSize: 12, color: '#9E9E9E' 
    }
})