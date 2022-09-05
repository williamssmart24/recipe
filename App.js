import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeDetail from './screens/RecipeDetail';
import { useFonts } from 'expo-font';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'sfn': require('./assets/fonts/SFNSText-RegularG2.otf'),
  });
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerTitle: "Tasty",
            headerTitleStyle:{color:'blue'}
          }
          }
        />
        <Stack.Screen name='Details' component={RecipeDetail} options={{ headerShown: false, statusBarColor:'transparent' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


