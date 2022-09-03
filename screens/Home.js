import { View, StatusBar } from 'react-native'
import React from 'react'
import SearchInput from '../components/SearchInput';
import Header from '../components/Header';
import RecipeGrid from '../components/RecipeGrid';
import BottomTab from '../components/BottomTab';


const data = [
    { name: 'Spaghetti With Shrimp sauce1', time: '10 Mins', image: '', type: "Pasta" },
    { name: 'Spaghetti With Shrimp sauce2', time: '10 Mins', image: '', type: "Pasta" },
    { name: 'Spaghetti With Shrimp sauce3', time: '10 Mins', image: '', type: "Pasta" },
    { name: 'Spaghetti With Shrimp sauce4', time: '10 Mins', image: '', type: "Pasta" },
    { name: 'Spaghetti With Shrimp sauce5', time: '10 Mins', image: '', type: "Pasta" },
    { name: 'Spaghetti With Shrimp sauce1', time: '10 Mins', image: '', type: "Pasta" },
    { name: 'Spaghetti With Shrimp sauce2', time: '10 Mins', image: '', type: "Pasta" },
    { name: 'Spaghetti With Shrimp sauce3', time: '10 Mins', image: '', type: "Pasta" },
    { name: 'Spaghetti With Shrimp sauce4', time: '10 Mins', image: '', type: "Pasta" },
    { name: 'Spaghetti With Shrimp sauce5', time: '10 Mins', image: '', type: "Pasta" }
]



export default function Home() {
    return (
        <View style={{ marginTop: StatusBar.currentHeight, paddingHorizontal: 15, flex: 1 }}>
            <Header />
            <SearchInput />
            <RecipeGrid recipes={data} />
            <BottomTab/>

        </View>
    )
}


