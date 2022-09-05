import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTab() {
    const [currentTabindex, setCurrentTabIndex] = useState(0)
    const tabs = [{ name: 'home', label: 'Home' }, { name: 'bookmark', label: 'Bookmark' }, { name: 'cog', label: 'Settings' }]
    const changeTab = (index) => {
        setCurrentTabIndex(index)
        //console.log(index)
    }

    return (
        <View style={{ height: 60, backgroundColor: 'white', elevation: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            {tabs.map((tab, index) =>
                <TabItem key={tab.name} iconName={tab.name} label={tab.label} currentTab={currentTabindex == index ? true : false} onPress={ () =>changeTab(index)} index={index} />
            )}
        </View>
    )
}

const TabItem = ({ iconName, label, currentTab, onPress}) => <Pressable onPress={onPress} style={{ alignItems: 'center', alignContent: 'center', padding:10}}>
    <FontAwesome5 name={iconName} size={16} color={currentTab ? 'pink' : '#616161'} />
    {currentTab && <Text style={{ fontSize: 13 }}>{label}</Text>}

</Pressable>