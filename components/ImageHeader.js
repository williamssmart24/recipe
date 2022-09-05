import { View, ImageBackground, Pressable } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'

export default function ImageHeader({ image, toogleVideoPlay }) {
    return (
        <ImageBackground source={{ uri: image }} style={{ height: 270, width: '100%' }} resizeMode={'cover'} >
            <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <View style={{ backgroundColor: '#fff', opacity: 0.7, borderRadius: 50, width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name='arrow-left' size={16} color='black' />
                </View>

                <View style={{ backgroundColor: '#000', opacity: 0.5, borderRadius: 50, width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name='bookmark' size={16} color='yellow' solid={true} />
                </View>
            </View>

            <Pressable onPress={toogleVideoPlay} style={{backgroundColor:'white', opacity:0.5, width:70, height:70, borderRadius:100, justifyContent:'center', alignItems:'center', position:'absolute', top:120, left:'40%'}}>
                <Ionicons name='play' color={'white'} size={50} />
            </Pressable>

        </ImageBackground>
    )
}