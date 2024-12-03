import { useEffect, useLayoutEffect } from "react";
import { SafeAreaView, StatusBar, Text, View, Animated } from "react-native";
import Title from "../common/Title";

function SplashScreen({navigation}){

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []
)
    // const translateY = new Animated.Value(0)
    // const duration = 800
//     useEffect(() => {
//         Animated.loop(
//         Animated.sequence([
//         Animated.timing(translateY, {
//             toValue: 20,
//             duration: duration,
//             useNativeDriver: true,
//         }),
//         Animated.timing(translateY, {
//             toValue: 0,
//             duration: duration,
//             useNativeDriver: true,
//         })
//     ])
// ).start()
//     }, [])
    return(
       <SafeAreaView 
       style={{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor: 'white'
       }}
       >
        <StatusBar barStyle='light-content' />
        <Animated.View style={[{transform: [{ translateY }] }]}>
            <Title text='ScoopUp Dating app' color='white' />
        </Animated.View>
       </SafeAreaView>
    )
}

export default SplashScreen