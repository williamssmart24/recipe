import { View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTab() {
    return (
        <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
            <FontAwesome5 name='home' size={18} color='#616161' onPress={() => ''} />
            <FontAwesome5 name='bookmark' size={18} color='#616161' />
            <FontAwesome5 name='heart' size={18} color='#616161' />
            <FontAwesome5 name='cog' size={18} color='#616161' />
        </View>
    )
}