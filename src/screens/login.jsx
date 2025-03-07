import React, { useState, useLayoutEffect } from "react";
import { 
    SafeAreaView, 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    Alert, 
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard
} from "react-native";
import ESignInScreen from "./ESignin";
import SignInScreen from "./Signin";
import api from "../core/api";
import utils from "../core/utils";
import HomeScreen from './Home';
import useGlobal from "../core/global";


function loginscreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = useGlobal(state => state.login)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const handleSignIn = () => {
        if (username === "" || password === "") {
            Alert.alert("Error", "Please fill in both fields.");
        }

    // make signin request

    api({
        method:'POST',
        url: '/login/',
        data: {
            username: username,
            password: password,
        }
    })
    .then(response => {
        console.log('login data', response.data)
        // Alert.alert("Success", "Login successful!");
        // Redirect user to home/dashboard (replace 'Home' with your actual screen)
        // navigation.navigate("Home");
        login(response.data)
    })
    .catch((error) => {
        if (error.response) {
            console.log("Login Error:", error.response.data);
            Alert.alert("Error", error.response.data.message || "Invalid credentials.");
        } else if (error.request) {
            console.log("Request Error:", error.request);
            Alert.alert("Error", "No response from server. Please try again.");
        } else {
            console.log("Error:", error.message);
            Alert.alert("Error", "Something went wrong. Please try again.");
        }
    });

    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={[styles.backButton, { zIndex: 1 }]} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>{"<"} Back</Text>
            </TouchableOpacity>
            <KeyboardAvoidingView behavior="height" style={{flex:1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.centeredContent}>
                <Text style={styles.title}>Scoop Up!</Text>
                <Text style={styles.subTitle}>Sign in to continue</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                    value={username}
                    onChangeText={setUsername}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Signin")}
                >
                    <Text style={styles.linkText}>
                        Don't have an account? Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    centeredContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        color: "#8a2487",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 16,
        color: "#555",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#f9f9f9",
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#8a2487",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginBottom: 15,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    linkText: {
        color: "#8a2487",
        fontSize: 14,
        marginTop: 10,
    },
    backButton: {
        position: "absolute",
        top: 20,
        left: 15,
        padding: 10,
    },
    backButtonText: {
        color: "#8a2487",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default loginscreen;
