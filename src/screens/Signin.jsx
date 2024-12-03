import React, { useLayoutEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import loginscreen from "./login";
import ESignInScreen from "./ESignin";

function SignInScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centeredContent}>
                <Text style={styles.title}>Scoop Up!</Text>
                <Text style={styles.description}>
                    Users go through a vetting process to ensure you never match with bots.
                </Text>
                <Text style={styles.subTitle}>Sign up to continue</Text>

                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("ESignin")}
                >
                    <Text style={styles.buttonText}
                    >Continue with Email</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.phoneButton}
                onPress={() => navigation.navigate("PSignUp")}
                >
                    <Text style={styles.phoneButtonText}>Use phone number</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.centeredContent}>
                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.orText}>or sign up with</Text>
                    <View style={styles.divider} />
                </View>

                <View style={styles.socialContainer}>
                    {[
                        { platform: 'facebook', src: require('../assets/facebook.png') },
                        { platform: 'google', src: require('../assets/google.png') }, // Local image
                        { platform: 'apple', src: require('../assets/apple.png') },
                    ].map(({ platform, url, src }) => (
                        <TouchableOpacity key={platform} style={styles.socialButton}>
                            <Image
                                source={url ? { uri: url } : src} // Use URL or fallback to local asset
                                style={styles.icon} 
                            />
                        </TouchableOpacity>
                    ))}
                </View>


                <View style={styles.linksContainer}>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Terms of use</Text>
                    </TouchableOpacity>
                    <Text style={styles.separator}> | </Text>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    },
    title: {
        color: "#8a2487",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        position: "absolute",
        top: 100,
    },
    description: {
        color: "black",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        position: "absolute",
        top: 150,
        width: 340,
    },
    subTitle: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",
        top: 300,
        width: 340,
    },
    button: {
        backgroundColor: "#8a2487",
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        marginVertical: 25,
        top:230,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    phoneButton: {
        backgroundColor: "#fff",
        borderColor: "lightgray",
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        top:220,
    },
    phoneButtonText: {
        color: "#8a2487",
        fontSize: 18,
        fontWeight: "bold",
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        marginTop:70,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: "#ccc",
    },
    orText: {
        marginHorizontal: 10,
        color: "#555",
        fontSize: 14,
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
    },
    socialButton: {
        backgroundColor: "#fff",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    linksContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    linkText: {
        color: "#6C3483",
        fontSize: 14,
        fontWeight: "bold",
    },
    separator: {
        marginHorizontal: 5,
        color: "#555",
        fontSize: 14,
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain', // To ensure proper scaling
    },
});

export default SignInScreen;
