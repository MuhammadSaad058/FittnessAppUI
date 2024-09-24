import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from "./AppContext";
const Training2Screen = () => {
  const navigation = useNavigation();
  const{setSelectedTraining}=useContext(AppContext)
  const trainingData = [
    {
      title: 'Legs',
      hours: '30 Hours',
      des:'Legs dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLuftVtcw5vKSoQmiWPTl2p3Pr1sbbwzU6IA&s',
    },
    {
      title: 'Abs Training',
      hours: '100 Hours',
      des:'Abs Trainning dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua',
      imageUrl:
        'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];

  const handleImagePress = (training) => {
    setSelectedTraining(training)
    navigation.navigate('TrainingDetailScreen');
  };

  const renderTrainingItem = (training) => (
    <View key={training.title} style={styles.trainingItem}>
      <TouchableOpacity onPress={() => handleImagePress(training)}>
        <Image source={{ uri: training.imageUrl }} style={styles.trainingImage} />
      </TouchableOpacity>
      <Text style={styles.trainingTitle}>{training.title}</Text>
      <Text style={styles.trainingHours}>{training.hours}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  trainingGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  trainingItem: {
    width: '48%',
    marginBottom: 16,
    padding: 16,
     backgroundColor: '#F5F5F5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  trainingImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  trainingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  trainingHours: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 4,
  },
 
});

export default Training2Screen;
