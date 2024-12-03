import React, { useState, useLayoutEffect } from "react";
import { 
    SafeAreaView, 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    Alert 
} from "react-native";
import loginscreen from "./login";

function ESignInScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const handleSignIn = () => {
        if (email === "" || password === "") {
            Alert.alert("Error", "Please fill in both fields.");
        } else {
            // Perform sign-in logic here (e.g., API call)
            Alert.alert("Success", `Signed in with email: ${email}`);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>{"<"} Back</Text>
            </TouchableOpacity>

            <View style={styles.centeredContent}>
                <Text style={styles.title}>Scoop Up!</Text>
                <Text style={styles.subTitle}>Sign Up to continue</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
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
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("login")}
                >
                    <Text style={styles.linkText}>
                        Already have an account? Sign In
                    </Text>
                </TouchableOpacity>
            </View>
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
