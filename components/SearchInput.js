import { View, TextInput, Text, TouchableOpacity, Keyboard } from 'react-native'
//import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';


export default function SearchInput(props) {
    const [search, setSearch] = useState('');
    const [suggestion, setSuggestion] = useState([]);
    const [isFocus, setFocus] = useState(false)
    const textMinSearchLength = 2;

    const autoCompleteSearch = (text) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6c85aa71cbmsh08b2d32c3f4a749p192175jsn1fa2dbed327a',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };

        fetch(`https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=${text}`, options)
            .then(response => response.json())
            .then(response => setSuggestion(response.results))
            .catch(err => console.error(err));
    }

    const updateSearchState = (text) => {
        text.length > textMinSearchLength ? autoCompleteSearch(text) :setSuggestion([])
        setSearch(text);
    }

    const selectFromSuggestion = (text) => {
        setSearch(text)
        Keyboard.dismiss()
    }

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 10, marginTop: 20 }}>
                <FontAwesome name='search' color={'black'} size={14} />
                <TextInput
                    value={search}
                    placeholder='Search for recipes'
                    style={{ padding: 8, flex: 1 }}
                    onFocus={() => setFocus(true)}
                    onChangeText={(text) => updateSearchState(text)}
                    onBlur={(e) => setFocus(false)}
                />
            </View>

            <View style={{ position: 'relative', width: '100%', display: isFocus ? "flex" : 'none' }}>
                <View style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, backgroundColor: 'white', width: '100%', borderRadius: 5, paddingHorizontal: 10 }} >
                    {suggestion.map((value, index) =>
                        <TouchableOpacity key={index} style={{ paddingVertical: 10 }} onPress={() => selectFromSuggestion(value.display)}>
                            <Text key={index}>{value.display}</Text>
                            <View style={{ height: 1, marginTop: 5, backgroundColor: 'white' }}></View>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

        </View>
    )
}