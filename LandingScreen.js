// LandingScreen.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/Logo.png")} style={styles.logo} />
      <Text style={styles.title}>
        <Text style={styles.titlePurple}>FIT</Text>
        <Text style={styles.titleOriginal}>NESS</Text>
      </Text>
      <Text style={styles.subtitle}>Make Yourself Better</Text>
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("SigninScreen")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginWithButton}
        onPress={()=>Alert.alert("This Screen is not yet Complete")}
      >
        <Text style={styles.buttonText}>Login with</Text>
        <View style={styles.socialIcon}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5", // Background color
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6F61", // Title color
  },
  subtitle: {
    fontSize: 18,
    color: "#4F4F4F",
    marginBottom: 40,
  },
  createAccountButton: {
    backgroundColor: "#FF6F61", // Button color
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: "#FFC107", // Button color
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  loginWithButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  buttonText: {
    fontSize: 16,
    color: "#4F4F4F",
  },
  socialIcon: {
    width: 20,
    height: 20,
    backgroundColor: "#3B5998", // Example social icon color (Facebook blue)
    marginLeft: 10,
    borderRadius: 10,
  },
  titlePurple: {
    color: "#6A1B9A", // Purple color for "FIT"
  },
  titleOriginal: {
    color: "#FF6F61", // Original color for "NESS"
  },
});

export default LandingScreen;
