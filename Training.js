import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "./Src/Components/CustomButton";
import { CustomTextInput } from "./Src/Components/CustomTextInput";
import { AppContext } from "./AppContext";
const TrainingScreen = () => {
  const navigation = useNavigation();
  const{setSelectedTraining}=useContext(AppContext)

  const trainingData = [
    {
      title: "Split Squat",
      hours: "30 Hours",
      des: "Split Squat dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNz6ZzkEhoAwUsCXP5uMZBYZJVeTPZtRGy9g&s",
    },
    {
      title: "Flow Yoga",
      hours: "100 Hours",
      des: "Flow Yoga dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/619c21a6f0a8053fa8a71d60/1688755891068-UQW9RJ5UUF7RTNN0AFVH/Vinyasa_Ibrahim.JPG",
    },
  ];

  const handleImagePress = (training) => {
    setSelectedTraining(training);
    navigation.navigate("TrainingDetailScreen");
  };


  const renderTrainingItem = (training) => (
    <View key={training.title} style={styles.trainingItem}>
      <TouchableOpacity onPress={() => handleImagePress(training)}>
        <Image
          source={{ uri: training.imageUrl }}
          style={styles.trainingImage}
        />
      </TouchableOpacity>
      <Text style={styles.trainingTitle}>{training.title}</Text>
      <Text style={styles.trainingHours}>{training.hours}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Most Popular Trainings</Text>
          <View style={styles.trainingGrid}>
            {trainingData.map(renderTrainingItem)}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Just for you</Text>
          <View style={styles.trainingGrid}>
            {trainingData.map(renderTrainingItem)}
          </View>
          <CustomTextInput
            mainStyle={{
              backgroundColor: "white",
              width: "100%",
              padding: 12,
              borderRadius: 10,
            }}
            viewStyle={{ marginTop: 20 }}
            setPlaceholder={"TrainingScreen TextInput"}
            setMaxlength={6}
            setPlaceholderTextColor={"grey"}
            setTextColor={"black"}
            setAutoComplete={"off"}
          />
          <CustomButton
            mainStyle={{ marginTop: 40 }}
            onPress={() => navigation.navigate("HomeDrawer")}
            ButtonTitle={"Show More"}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  trainingGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  trainingItem: {
    width: "48%",
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  trainingImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  trainingTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  trainingHours: {
    fontSize: 14,
    color: "#6c757d",
    marginTop: 4,
  },
});

export default TrainingScreen;
