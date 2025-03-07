import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import './src/core/fontawesome'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/Splash';
import SignInScreen from './src/screens/Signin';
import SignUpScreen from './src/screens/Signup';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import MessageScreen from './src/screens/Message';
import ESignInScreen from './src/screens/ESignin';
import loginscreen from './src/screens/login';
import PhoneNumberSignUp from './src/screens/PSignUp';
import OTPScreen from './src/screens/Otp';
import ProfileScreen from './src/screens/Profiledetail';
import useGlobal from './src/core/global';

const LightTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: 'white'
  }
}

const Stack = createNativeStackNavigator();

function App() {

  const [initialized] = useState(true)
  // const [authenticated] = useState(false)

  const authenticated = useGlobal(state => state.authenticated)

  return (
    <NavigationContainer theme={LightTheme}>
      {/* Place SafeAreaView and StatusBar outside the navigator */}
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          { !initialized ? (
            <>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            </>
          ) : !authenticated ? (
          <>
          <Stack.Screen name="Signin" component={SignInScreen} />
          <Stack.Screen name="ESignin" component={ESignInScreen} />
          <Stack.Screen name="login" component={loginscreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
          <Stack.Screen name="PSignUp" component={PhoneNumberSignUp} />
          <Stack.Screen name="otp" component={OTPScreen} />
          </>
          ) : (
          <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profiledetail" component={ProfileScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Messages" component={MessageScreen} />
          </>
          )}
          
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
