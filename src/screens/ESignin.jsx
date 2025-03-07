import React, { useState, useLayoutEffect } from "react";
import { 
    SafeAreaView, 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    Alert, 
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import loginscreen from "./login";
import api from "../core/api";


function ESignInScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const handleSignIn = () => {
        if (!username || !email || !password || !confirmPassword) {
            Alert.alert("Error", "All fields are required.");
            return;
        }
        if (password.length < 6) {
            Alert.alert("Error", "Password must be at least 6 characters long.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }

        // Make signup request
        api({
            method: "POST",
            url: "/signin/",
            data: {
                username: username,
                email: email,
                password: password,
            },
        })
            .then((response) => {
                console.log("Signup Success:", response.data);
                Alert.alert("Success", "Account created! You can now sign in.");
                navigation.navigate("login"); // Redirect to login screen
            })
            .catch((error) => {
                if (error.response) {
                    console.log("Signup Error:", error.response.data);
                    Alert.alert("Error", error.response.data.message || "Signup failed.");
                } else if (error.request) {
                    console.log("Signup Request Error:", error.request);
                } else {
                    console.log("Signup Error:", error.message);
                }
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity
                style={[styles.backButton, { zIndex: 1 }]}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backButtonText}>{"<"} Back</Text>
            </TouchableOpacity>

            <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.centeredContent}>
                        <Text style={styles.title}>Scoop Up!</Text>
                        <Text style={styles.subTitle}>Sign Up to continue</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="#aaa"
                            value={username}
                            onChangeText={setUsername}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#aaa"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#aaa"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="#aaa"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("login")}>
                            <Text style={styles.linkText}>
                                Already have an account? Sign In
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
});

export default ESignInScreen;
