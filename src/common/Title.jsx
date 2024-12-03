import { Text } from "react-native"

function Title({ text, color }){
    return (
        <Text
            style={{
                color:'white',
                textAlign:'center',
                fontSize:48,
                fontFamily:'Montserrat-Regular',
                marginBottom:40,
            }}
            >
               {text}
            </Text>
    )

}

export default Title