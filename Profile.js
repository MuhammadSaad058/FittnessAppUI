import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList
} from 'react-native';

const ProfileScreen = () => {
  const [photos] = useState([
    {
      id: 1,
      source: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgReY_orUQ8zARoed8Th538bP5sQ1HIwNbfg&s',
      },
    },
    {
      id: 2,
      source: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFwmEITv5_Cz4SARBjGkP9b6fQdRklSVH1g&s',
      },
    },
    {
      id: 3,
      source: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvBATJkIRcS3D2Jg0IKqSV5L4zP-eWdRco5m4IyJTRj43vbrsZcF26JZvemLurnsod2c&usqp=CAU',
      },
    },
    {
      id: 4,
      source: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRfUhZdJslVKCuuzGUTP5lq67RqBU76oDDmn_a6vmifBV3oifrzLvR72T3iqbxWWs7Jk&usqp=CAU',
      },
    },
    {
      id: 5,
      source: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UDIL8NXgQ7omYJBLqd0GxkOP34Y_K3VCB6e0r4sMY28pdKOUSjKlJgMckkXv_onWd9k&usqp=CAU',
      },
    },
    {
      id: 6,
      source: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdKbSAhdW-iFUHK2zh0olmq2no8DcWhtcah994caXkcgdUUaT_mv39a1hu7gYAYPU-hk&usqp=CAU',
      },
    },
  ]);
  const DATA = [
    {
      id: '1',  // Changed to string to ensure unique key
      image: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFwmEITv5_Cz4SARBjGkP9b6fQdRklSVH1g&s',
      },
      title: 'Cardio Exercise',
      date: '5 days ago',
    },
    {
      id: '2',  // Changed to string to ensure unique key
      image: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRfUhZdJslVKCuuzGUTP5lq67RqBU76oDDmn_a6vmifBV3oifrzLvR72T3iqbxWWs7Jk&usqp=CAU',
      },
      title: 'Card',
      date: '5 days ago',
    },
  ];

  const renderTraining = ({ item }) => (
    <View style={styles.courseItem}>
      <Image source={item.image} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseHours}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userInfo}>
        <View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFwmEITv5_Cz4SARBjGkP9b6fQdRklSVH1g&s',
            }}
            style={styles.profilePic}
          />
          <Text style={styles.userName}>M Saad</Text>
        </View>
        <View style={styles.userDetails}>
          <View style={styles.follow}>
            <View style={styles.followItem}>
              <Text style={styles.followNumber}>1 Million</Text>
              <Text style={styles.followLabel}>Followers</Text>
            </View>
            <View style={styles.followItem}>
              <Text style={styles.followNumber}>12</Text>
              <Text style={styles.followLabel}>Followings</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skilled</Text>
        <View style={styles.progress}>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarFilled} />
          </View>
          <Text style={styles.progressText}>900 Hours</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trainings</Text>
        <FlatList
          data={DATA}
          renderItem={renderTraining}
          horizontal
          keyExtractor={(item) => item.id}
           showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.trainerList}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Photos</Text>
        <View style={styles.photos}>
          {photos.map((photo) => (
            <View key={photo.id} style={styles.photo}>
              <Image source={photo.source} style={styles.photoImage} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 40,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profilePic: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  follow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  followItem: {
    alignItems: 'center',
  },
  followNumber: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  followLabel: {
    fontSize: 12,
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  progressBarContainer: {
    width: '60%',
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
    marginRight: 8,
  },
  progressBarFilled: {
    width: '80%',
    height: '100%',
    backgroundColor: '#4caf50',
  },
  progressText: {
    fontSize: 12,
    marginRight: 8,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
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
  photos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photo: {
    width: '32%',
    marginBottom: 16,
  },
  photoImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  trainerList: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

export default ProfileScreen;
