import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "./Src/Components/CustomButton";
import { CustomTextInput } from "./Src/Components/CustomTextInput";

const trainingData = [
  {
    id: 1,
    title: "Cardio Exercise",
    hours: "110 Hours",
    image:
      "https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg",
  },
  {
    id: 2,
    title: "Strength Training",
    hours: "85 Hours",
    image:
      "https://c8.alamy.com/comp/2D7G2F6/handsome-man-standing-strong-in-the-gym-and-flexing-muscles-muscular-athletic-bodybuilder-fitness-model-posing-after-exercises-2D7G2F6.jpg",
  },
  {
    id: 3,
    title: "Flexibility Exercise",
    hours: "60 Hours",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2-dVG7D9HYnYUuALWYAWbEbflrsaho-ysNfuHEOHx68LfQYe9zFD3pclFinsf16Szoo&usqp=CAU",
  },
  
];

const AllCoursesScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  const filteredData = trainingData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.inner}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search courses..."
                value={search}
                onChangeText={(text) => setSearch(text)}
              />
              <Icon
                name="search"
                size={24}
                color="#888"
                style={styles.searchIcon}
              />
            </View>
            {filteredData.map((item) => (
              <View key={item.id} style={styles.courseItem}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.courseImage}
                />
                <View style={styles.courseInfo}>
                  <Text style={styles.courseTitle}>{item.title}</Text>
                  <Text style={styles.courseHours}>{item.hours}</Text>
                </View>
              </View>
            ))}
            <View style={styles.footer}>
              <CustomTextInput
                mainStyle={{
                  backgroundColor: "white",
                  width: "100%",
                  padding: 12,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                }}
                setPlaceholder={"CourseScreen TextInput"}
                setMaxlength={6}
                setAutoComplete={"off"}
                setPlaceholderTextColor={"grey"}
                setTextColor={"black"}
              />
              <CustomButton
                mainStyle={{ marginTop: 12 }}
                onPress={() => navigation.navigate("Dashboard")}
                ButtonTitle={"Show More"}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 100, // Add enough padding for footer space
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 40,
  },
  searchIcon: {
    marginLeft: 8,
  },
  courseItem: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 5,
    elevation: 3,
  },
  courseImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  courseInfo: {
    alignItems: "center",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  courseHours: {
    fontSize: 14,
    color: "#888",
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default AllCoursesScreen;
