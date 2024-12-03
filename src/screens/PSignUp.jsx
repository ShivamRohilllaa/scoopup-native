import React, { useState, useLayoutEffect } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import OTPScreen from "./Otp";

function PhoneNumberSignUp({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const handleSignUp = () => {
        if (phoneNumber === "" || phoneNumber.length !== 10) {
            Alert.alert("Error", "Please enter a valid 10-digit phone number.");
        } else {
            // Proceed with signup logic
            navigation.navigate("otp", { phoneNumber });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>{"<"} Back</Text>
            </TouchableOpacity>

            <View style={styles.centeredContent}>
                <Text style={styles.title}>My mobile</Text>
                <Text style={styles.sub_title}>Please enter your valid phone number. We will send you a 4-digit code to verify your account. </Text>

                <View style={styles.phoneInputContainer}>
                    <Image
                        source={require("../assets/india.png")} // Add the flag image to your assets folder
                        style={styles.flagIcon}
                    />
                    <Text style={styles.countryCode}>+91</Text>
                    <TextInput
                        style={styles.phoneInput}
                        placeholder="9540xxxxxx"
                        placeholderTextColor="#aaa"
                        keyboardType="number-pad"
                        maxLength={10}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Continue</Text>
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
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "left", // Aligns text to the left
        width: "100%",     // Ensures the text occupies the full width of its container
    },
    sub_title:{
        fontSize: 14,
        marginBottom: 30,
    },
    phoneInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "#f9f9f9",
        marginBottom: 20,
        width: "100%",
    },
    flagIcon: {
        width: 30,
        height: 20,
        marginRight: 10,
    },
    countryCode: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#555",
        marginRight: 10,
    },
    phoneInput: {
        flex: 1,
        fontSize: 16,
        color: "#000",
        height: 50,
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#8a2487",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default PhoneNumberSignUp;
