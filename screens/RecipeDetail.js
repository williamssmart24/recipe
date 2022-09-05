import { View, Text, ScrollView, Button, Modal } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import RecipeGridItem from '../components/RecipeGridItem'

import ImageHeader from '../components/ImageHeader';
import VideoHeader from '../components/VideoHeader';



const similar_recipes = [
    {
        thumbnail_url: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/341495.jpg', name: 'Testing Food', total_time_tier: { display_tier: '10 mins' }
    }, {
        thumbnail_url: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/341495.jpg', name: 'Testing Food', total_time_tier: { display_tier: '10 mins' }
    },
    {
        thumbnail_url: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/341495.jpg', name: 'Testing Food', total_time_tier: { display_tier: '10 mins' }
    },
    {
        thumbnail_url: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/341495.jpg', name: 'Testing Food', total_time_tier: { display_tier: '10 mins' }
    }
]

export default function RecipeDetail({ route, navigation }) {
    const { recipe } = route.params
    const ingredients = recipe.sections[0].components;


    return (
        <View style={{ flex: 1 }}>
            <VideoHeader video_url={recipe.renditions[0].url} postal={recipe.thumbnail_url} />

            <View style={{ padding: 10, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 20, color: '#0c0650',  width: '85%' , fontFamily: 'sfn'}}>{recipe.name}</Text>
            </View>


            <View style={{ flex: 1, padding: 10, backgroundColor: 'white' }}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, color: '#05003b' }}>Ingredients</Text>
                        <Text style={{ color: 'gray' }}>{ingredients.length} Items</Text>
                    </View>
                    <View style={{ marginHorizontal: 1, flex: 1, height: 'auto' }}>

                        {ingredients.map((ingredient, index) => <View key={index} style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10, elevation: 0, borderRadius: 5, marginVertical: 1, backgroundColor: 'white', alignItems: 'center' }}>
                            <FontAwesome5 name='star' color={'#64B5F6'} style={{ marginRight: 10 }} solid={true} />
                            <View style={{ flex: 1 }}>
                                <Text style={{fontFamily: 'sfn',}}>{ingredient.raw_text}</Text>
                            </View>
                        </View>)}

                    </View>

                    <Text style={{ fontSize: 18, color: '#05003b', marginTop: 10, marginBottom: 5 }}>Cooking instructions</Text>
                    {recipe.instructions.map(instruction =>
                        <View style={{ flexDirection: 'row', marginBottom: 15 }} key={instruction.display_text} >
                            <Text style={{ fontSize: 14, color: '#05003b', marginRight: 10, fontWeight:'bold' , }}>{instruction.position}</Text>
                            <Text style={{ flex: 1, color:'#525252',fontFamily: 'sfn', }}>{instruction.display_text}</Text>
                        </View>
                    )}

                    <Text style={{ fontSize: 18, color: '#05003b', marginTop: 10 }}>Similar Recipe</Text>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            similar_recipes.map((recipe, index) => <View style={{ width: '50%' }} key={index + 10} >
                                <RecipeGridItem recipe={recipe} />
                            </View>)
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}