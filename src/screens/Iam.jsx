import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";


const GenderSelectionScreen = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState("Man");

  const genderOptions = ["Woman", "Man", "Other"];

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="#6D2471" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>I identify myself as...</Text>

      {/* Gender Options */}
      {genderOptions.map((gender) => (
        <TouchableOpacity
          key={gender}
          style={[
            styles.option,
            selectedGender === gender && styles.selectedOption,
          ]}
          onPress={() => setSelectedGender(gender)}
        >
          <Text
            style={[
              styles.optionText,
              selectedGender === gender && styles.selectedOptionText,
            ]}
          >
            {gender}
          </Text>
          {selectedGender === gender && (
            <Ionicons name="checkmark-outline" size={20} color="white" />
          )}
        </TouchableOpacity>
      ))}

      {/* Continue Button */}
      <TouchableOpacity style={styles.cbutton} onPress={() => console.log("Continue")}>
                    <Text style={styles.cbuttonText}>Continue</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    padding: 10,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#F3EDF7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "#6D2471",
    borderColor: "#6D2471",
  },
  optionText: {
    fontSize: 18,
  },
  selectedOptionText: {
    color: "#fff",
    // fontWeight: "bold",
  },
  continueButton: {
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cbutton: {
    width: "100%",
    height: 50,
    backgroundColor: "#8a2487",
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius: 8,
    // marginBottom: 15,
    position: "absolute",
    bottom: 80,
    left: 20,
    right: 20,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
},
    cbuttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default GenderSelectionScreen;
