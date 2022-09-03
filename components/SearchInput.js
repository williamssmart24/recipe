import { View, TextInput } from 'react-native'
//import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SearchInput() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#F5F5F5", borderRadius: 10, paddingHorizontal: 10, marginTop: 20 }}>
            <FontAwesome name='search' color={'black'} size={14} />
            <TextInput
                placeholder='Search for recipes'
                style={{ padding: 8, flex: 1 }}
            />
        </View>
    )
}