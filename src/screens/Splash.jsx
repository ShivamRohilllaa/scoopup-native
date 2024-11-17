import { SafeAreaView, StatusBar, Text, View } from "react-native";

function SplashScreen(){
    return(
       <SafeAreaView 
       style={{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor: 'black'
       }}
       >
        <StatusBar barStyle='light-content' />
        <View>
            <Text
            style={{
                color:'white',
                textAlign:'center',
                fontSize:48,
                fontFamily:'Montserrat-Regular'
            }}
            >
                ScoopUp Dating App
            </Text>
        </View>
       </SafeAreaView>
    )
}

export default SplashScreen