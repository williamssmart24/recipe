import { View, Text, ImageBackground, StatusBar, Button, TouchableOpacity } from 'react-native'
import React from 'react'


const image = { uri: "../assets/bg.jpg" }

export default function Welcome() {
    return (
        <View style={{ flex: 1}}>
            <ImageBackground
                source={require("../assets/bg.jpg")}
                style={{
                    flex: 1,
                    width: null,
                    height: null
                }}
                resizeMode="cover"

            >
                <View style={{flex: 1, backgroundColor:'black', opacity:0.5}}></View>
                <View style={{ position: 'absolute', bottom: 50, paddingHorizontal: 20, width: "100%", alignSelf:'center' }}>
                    <View style={{marginBottom: 40}}>
                        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', marginBottom:15}}>Cooking a
                            Delicious Food Easily</Text>
                        <Text style={{ color: '#cad0d0', fontSize:15, width: '80%' }}>
                            Discover more than 1200 food recipes in you hands and cooking it easilt
                        </Text>
                    </View>

                    {/* <Button title='Login'  /> */}

                    <TouchableOpacity style={{ padding: 20, backgroundColor: '#2ee7e4', borderRadius: 8 }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 20, backgroundColor: 'transparent', borderRadius: 8, marginTop: 10, borderColor:'#2ee7e4', borderWidth: 0.5}}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>

    )
}