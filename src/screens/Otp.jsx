import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const OTPScreen = ({ route, navigation }) => {
    const { phoneNumber } = route.params;  // Access the phone number passed from the previous screen
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(42);

    // Hide the header in the OTP screen
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            inputs[index + 1]?.focus();
        }
    };

    const inputs = [];

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>{"<"} Back</Text>
            </TouchableOpacity>
            <Text style={styles.timerText}>
                {`00:${timer < 10 ? `0${timer}` : timer}`}
            </Text>
            <Text style={styles.infoText}>
                We’ve sent a code to {phoneNumber}. Please enter the code below.
            </Text>

            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={[
                            styles.otpInput,
                            digit ? styles.filledInput : styles.emptyInput,
                        ]}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={digit}
                        onChangeText={(value) => handleOtpChange(value, index)}
                        ref={(input) => (inputs[index] = input)}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    timerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#8a2487",
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40,
    },
    otpInput: {
        width: 50,
        height: 50,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        borderRadius: 8,
        borderWidth: 2,
        marginHorizontal: 5,
    },
    filledInput: {
        borderColor: "#8a2487",
        backgroundColor: "#8a2487",
        color: "white",
    },
    emptyInput: {
        borderColor: "#ccc",
        backgroundColor: "white",
        color: "#8a2487",
    },
    submitButton: {
        width: "80%",
        height: 50,
        backgroundColor: "#8a2487",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    submitButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
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

export default OTPScreen;
