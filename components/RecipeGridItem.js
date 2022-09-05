import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function RecipeGridItem({recipe, onPress}) {

    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: 'white', ...style.container }}>
            <Image source={{uri: recipe.thumbnail_url}} style={style.image} borderRadius={5} resizeMode={'cover'} />
            <Text style={{marginVertical:5, fontFamily: 'sfn',}}>{recipe.name}</Text>
            <View style={style.footerContainer} >
                <FontAwesome5 name='clock' size={14} color='#616161' />
                <Text style={style.recipeTime}>{recipe.total_time_tier?.display_tier || 'Under 1 hour'}</Text>
                <FontAwesome5 name='bookmark' size={18} color='#616161' style={{ marginLeft: 'auto' }} />
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 2,
        marginBottom: 15,
        borderRadius: 5,
        padding: 5,
    },
    image: {
        width: '100%',
        height: 120,
    },
    footerContainer: {
        flexDirection: 'row', alignItems: 'center', marginVertical: 5,marginTop:'auto'
    },
    recipeTime:{
        marginLeft: 5, fontSize: 12, color: '#9E9E9E' 
    }
})