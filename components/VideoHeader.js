import React from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';
import { View, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const VideoHeader = ({postal, video_url}) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const playVideo = () => {
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
    }

    return (
        <View style={{ width: '100%', height: 270 }}>
            <Video
                posterSource={{uri:postal}}
                posterStyle={{resizeMode:'cover'}}
                ref={video}
                isLooping
                useNativeControls={false}
                style={{ flex: 1 }}
                usePoster={true}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                resizeMode={'cover'}
                source={{ uri: video_url }}
            />
            <Pressable onPress={playVideo} style={{backgroundColor:'white', opacity:0.5, width:70, height:70, borderRadius:100, justifyContent:'center', alignItems:'center', position:'absolute', top:120, left:'40%'}}>
                {
                    status.isPlaying ? <Ionicons name='pause' color={'white'} size={50} />: <Ionicons name='play' color={'white'} size={50} />
                }
                
            </Pressable>
        </View>
    )
}

export default  VideoHeader
