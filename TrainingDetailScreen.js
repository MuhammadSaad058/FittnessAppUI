import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AppContext } from "./AppContext";

const trainingData = [
  {
    id: 1,
    title: "Split Squat",
    hours: "30 Hours",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNz6ZzkEhoAwUsCXP5uMZBYZJVeTPZtRGy9g&s",
  },
  {
    id: 2,
    title: "Flow Yoga",
    hours: "100 Hours",
    image:
      "https://images.squarespace-cdn.com/content/v1/619c21a6f0a8053fa8a71d60/1688755891068-UQW9RJ5UUF7RTNN0AFVH/Vinyasa_Ibrahim.JPG",
  },
  {
    id: 3,
    title: "Flow Yoga",
    hours: "100 Hours",
    image:
      "https://images.squarespace-cdn.com/content/v1/619c21a6f0a8053fa8a71d60/1688755891068-UQW9RJ5UUF7RTNN0AFVH/Vinyasa_Ibrahim.JPG",
  },
  {
    id: 4,
    title: "Flow Yoga",
    hours: "100 Hours",
    image:
      "https://images.squarespace-cdn.com/content/v1/619c21a6f0a8053fa8a71d60/1688755891068-UQW9RJ5UUF7RTNN0AFVH/Vinyasa_Ibrahim.JPG",
  },
];

const renderItem = ({ item }) => (
  <View style={styles.courseItem}>
    <Image source={{ uri: item.image }} style={styles.courseImage} />
    <View style={styles.courseInfo}>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseHours}>{item.hours}</Text>
    </View>
  </View>
);

const TrainingDetailScreen = ({ route, navigation }) => {
  const { selectedTraining } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedTraining.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{selectedTraining.title}</Text>
        <Text style={styles.subtitle}>Keeps your waist in shape</Text>
        <View style={styles.rating}>
          {[...Array(3)].map((_, index) => (
            <Icon key={index} name="star" size={16} color="#FFD700" />
          ))}
          <Icon name="star-outline" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>3/4</Text>
        </View>
        <Text style={styles.description}>{selectedTraining.des}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play-circle" size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Icon name="bookmark" size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.favouriteButton}>
            <Text style={styles.buttonText}>Favourite</Text>

            <Icon
              style={styles.heartBorder}
              name="heart"
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Just for you</Text>
        <FlatList
          data={trainingData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.courseList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 35,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  image: {
    width: "90%",
    height: 200,
    borderRadius: 10,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#666",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 24,
  },
  buttons: {
    flexDirection: "row",
    marginBottom: 24,
  },
  playButton: {
    backgroundColor: "#6A0D91", // Purple color
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8, // Space between buttons
  },
  bookmarkButton: {
    backgroundColor: "#FFD700", // Gold color
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8, // Space between buttons
  },
  favouriteButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFF", // White background
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  courseItem: {
    alignItems: "center",
    marginRight: 16,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    resizeMode: "cover",
  },
  courseInfo: {
    marginTop: 8,
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
  courseList: {
    paddingHorizontal: 16,
  },
  heartBorder: {
    paddingTop: 6,
    paddingLeft: 5,
    borderRadius: 6,
    backgroundColor: "#FF6F61",
    width: 30,
    height: 30,
  },
});

export default TrainingDetailScreen;
