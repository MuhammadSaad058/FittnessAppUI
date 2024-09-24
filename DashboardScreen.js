import React, { useState,useContext} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CustomButton } from "./Src/Components/CustomButton";
import { CustomTextInput } from "./Src/Components/CustomTextInput";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { AppContext } from './AppContext';

const DashboardScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // Extract parameters from route.params with default values

  // Define tabs
  const tabs = ["Today", "Week", "Month", "3 Months"];

  // Define stats data
  const stats = [
    {
      icon: "heart",
      title: "Heart",
      value: "120",
      unit: "bpm",
      color: "#ff6666",
    },
    {
      icon: "walk",
      title: "Steps",
      value: "3215",
      unit: "Steps",
      color: "#6666ff",
    },
    {
      icon: "water",
      title: "Water",
      value: "6",
      unit: "Cups",
      color: "#66ccff",
    },
    {
      icon: "moon-waning-crescent",
      title: "Sleep",
      value: "8:30",
      unit: "Hours",
      color: "#ffff66",
    },
    {
      icon: "calendar",
      title: "Training",
      value: "1:30",
      unit: "Hours",
      color: "#ff9966",
    },
    {
      icon: "fire",
      title: "Calories",
      value: "861",
      unit: "kcal",
      color: "#ff6666",
    },
  ];

  // Render tab component
  const renderTab = (tab, index) => (
    <TouchableOpacity
      key={index}
      style={[styles.tab, index === 0 && styles.activeTab]}
    >
      <Text style={styles.tabText}>{tab}</Text>
    </TouchableOpacity>
  );

  // Render stat card component
  const renderStatCard = (stat, index) => (
    <View key={index} style={styles.statCard}>
      <View style={styles.statIcon}>
        <MaterialCommunityIcons name={stat.icon} size={20} color={stat.color} />
      </View>
      <Text style={styles.statTitle}>{stat.title}</Text>
      <View style={styles.statValue}>
        <Text style={styles.statValueText}>{stat.value}</Text>
        <Text style={styles.statValueUnit}>{stat.unit}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.inner}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tabs}>
          {tabs.map((tab, index) => renderTab(tab, index))}
        </View>
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => renderStatCard(stat, index))}
        </View>
        <CustomTextInput
          mainStyle={{
            backgroundColor: "white",
            width: "100%",
            padding: 12,
            borderRadius: 10,
            paddingHorizontal: 12,
          }}
          viewStyle={{ padding: 15 }}
          setPlaceholder={"DashboardScreen TextInput"}
          setMaxlength={6}
          setAutoComplete={"off"}
          setPlaceholderTextColor={"grey"}
          setTextColor={"black"}
        />
        <CustomButton
          mainStyle={{ marginTop: 20 }}
          onPress={() => navigation.navigate("HomeDrawer")}
          ButtonTitle={"Show More"}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    
  },
  inner: {
    padding: 16,
    paddingBottom: 150,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  tab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
  },
  activeTab: {
    borderBottomColor: "#007bff",
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 5,
  },
  statCard: {
    width: "45%",
    height: "30%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 25,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statIcon: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
  },
  statTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  statValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  statValueText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statValueUnit: {
    fontSize: 16,
    marginLeft: 5,
  },
  nam: {
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
});

export default DashboardScreen;
