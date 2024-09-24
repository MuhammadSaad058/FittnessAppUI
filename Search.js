import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

// Replace local image paths with URLs
const DATA = [
  {
    id: '1',
    title: 'Split Squat',
    hours: '10 Hours',
    image:
      'https://experiencelife.lifetime.life/wp-content/uploads/2021/03/Bulgarian-Split-Squat.jpg',
  },
  {
    id: '2',
    title: 'Flow Yoga',
    hours: '130 Hours',
    image:
      'https://images.squarespace-cdn.com/content/v1/619c21a6f0a8053fa8a71d60/1688755891068-UQW9RJ5UUF7RTNN0AFVH/Vinyasa_Ibrahim.JPG',
  },
  {
    id: '3',
    title: 'Split Squat',
    hours: '10 Hours',
    image:
      'https://experiencelife.lifetime.life/wp-content/uploads/2021/03/Bulgarian-Split-Squat.jpg',
  },
];

const TRAINERS = [
  {
    id: '1',
    name: 'James Smith',
    title: 'Running Coach',
    rating: 5,
    followers: '2.3k',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzxUrRjla2vbUNSssUrnON6cZUmsXpjWXDw&s',
  },
  {
    id: '2',
    name: 'James Smith',
    title: 'Running Coach',
    rating: 4,
    followers: '1.2k',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzw_Ti47ovNmMbRwz3HaY7hDhHFeAmER6kw&s',
  },
  {
    id: '3',
    name: 'James Smith',
    title: 'Running Coach',
    rating: 4.5,
    followers: '5.1k',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iLslF-t76lXs2kvg36FYHsC-wotRFj8QKg&s',
  },
  {
    id: '4',
    name: 'James Smith',
    title: 'Running Coach',
    rating: 5,
    followers: '3.8k',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolziUJIZNIYddty3Yd0iJxC3ZJ8tUabb2aw&s',
  },
];

// Constants for star images
const STAR_FULL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnvGPySHCFAGUJmupOB093hP_Mqf_W5qAQ&s';
const STAR_EMPTY =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnvGPySHCFAGUJmupOB093hP_Mqf_W5qAQ&s';

const SearchScreen = () => {
  // Render course item
  const renderCourseItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Image source={{ uri: item.image }} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseHours}>{item.hours}</Text>
      </View>
    </View>
  );

  // Render trainer item
  const renderTrainerItem = ({ item }) => (
    <View style={styles.trainerItem}>
      <Image source={{ uri: item.image }} style={styles.trainerImage} />
      <View style={styles.trainerInfo}>
        <Text style={styles.trainerName}>{item.name}</Text>
        <Text style={styles.trainerTitle}>{item.title}</Text>
        <View style={styles.ratingContainer}>
          {[...Array(Math.floor(item.rating))].map((_, index) => (
            <Image
              key={`full-${index}`}
              source={{ uri: STAR_FULL }}
              style={styles.star}
            />
          ))}
          {[...Array(5 - Math.floor(item.rating))].map((_, index) => (
            <Image
              key={`empty-${index}`}
              source={{ uri: STAR_EMPTY }}
              style={styles.star}
            />
          ))}
        </View>
        <Text style={styles.trainerFollowers}>{item.followers} Followers</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <Text style={styles.sectionTitle}>Popular Courses</Text>
      <FlatList
        data={DATA}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.courseList}
      />
      <Text style={styles.sectionTitle}>Top Trainers</Text>
      <FlatList
        data={TRAINERS}
        renderItem={renderTrainerItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.trainerList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 70,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 24,
  },
  courseList: {
    paddingHorizontal: 16,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  courseInfo: {
    marginLeft: 16,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseHours: {
    fontSize: 14,
    color: '#888',
  },
  trainerList: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  trainerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  trainerImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  trainerInfo: {
    marginLeft: 16,
  },
  trainerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  trainerTitle: {
    fontSize: 14,
    color: '#888',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  star: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
  trainerFollowers: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});

export default SearchScreen;
