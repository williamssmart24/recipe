import { View, StatusBar } from 'react-native'
import SearchInput from '../components/SearchInput';
import Header from '../components/Header';
import RecipeGrid from '../components/RecipeGrid';
import BottomTab from '../components/BottomTab';
import { useState, useEffect } from 'react';


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

export default function Home({ navigation }) {

    const [recipes, setRecipes] = useState([]);

    const fetchData = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6c85aa71cbmsh08b2d32c3f4a749p192175jsn1fa2dbed327a',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };

        fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=licensed_video', options)
            .then(response => response.json())
            .then(response => setRecipes(prevRecipe => response.results))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <View style={{flex:1}}>
            <View style={{ paddingHorizontal: 15, flex: 1, backgroundColor: '#F5F5F5' }}>
                <Header />
                <SearchInput />
                <RecipeGrid recipes={recipes} navigation={navigation} />
            
            </View>
            <BottomTab />
        </View>
    )
}

