// CustomDrawerContent.js

import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("./assets/Logo.png")} // Replace with your logo path
          style={styles.logo}
        />
      </View>
      <ScrollView>
        <DrawerItem
          label="Home"
          icon={() => <Icon name="home-outline" size={22} color="black" />}
          onPress={() => props.navigation.navigate("HomeDrawer")}
        />
        <DrawerItem
          label="Dashboard"
          icon={() => <Icon name="analytics-outline" size={22} color="black" />}
          onPress={() => props.navigation.navigate("Dashboard")}
        />
        <DrawerItem
          label="Statistics"
          icon={() => (
            <Icon name="stats-chart-outline" size={22} color="black" />
          )}
          onPress={() => props.navigation.navigate("Statistics")}
        />
        <DrawerItem
          label="Training"
          icon={() => <Icon name="briefcase-outline" size={22} color="black" />}
          onPress={() => props.navigation.navigate("Training")}
        />
        <DrawerItem
          label="All Courses"
          icon={() => <Icon name="school-outline" size={22} color="black" />}
          onPress={() => props.navigation.navigate("AllCourses")}
        />
      </ScrollView>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    paddingTop: 30,
    backgroundColor: "#f4f4f4", // Background color of the drawer
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default CustomDrawerContent;
