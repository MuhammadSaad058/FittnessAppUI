import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';

// TrainingItem component
const TrainingItem = ({ exercise, duration, isEnabled, onToggle }) => {
  return (
    <View style={styles.trainingItem}>
      <View style={styles.trainingItemText}>
        <Text style={styles.trainingItemTitle}>{exercise}</Text>
        <Text style={styles.trainingItemDuration}>{duration}</Text>
      </View>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => onToggle(exercise)}
        value={isEnabled}
      />
    </View>
  );
};

// Main screen component
const EditTrainingScreen = () => {
  const [scheduledTraining, setScheduledTraining] = useState([
    { exercise: 'Push-Up', duration: '10 Minutes', enabled: true },
    { exercise: 'Squats', duration: '15 Minutes', enabled: false },
    { exercise: 'Plank', duration: '5 Minutes', enabled: true },
    { exercise: 'Burpees', duration: '10 Minutes', enabled: false },
    { exercise: 'Push-Up', duration: '10 Minutes', enabled: true },
  ]);

  // Handle toggle for individual exercise
  const handleToggle = (exercise) => {
    setScheduledTraining((prevTraining) =>
      prevTraining.map((item) =>
        item.exercise === exercise ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  // Handle cancel button press
  const handleCancel = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Edit Training</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.workoutTitle}>Morning Workout</Text>
        <Text style={styles.workoutDate}>10 Jan - 15 Feb, 2019</Text>
        <Text style={styles.trainingTitle}>Scheduled Training</Text>
        {scheduledTraining.map((item, index) => (
          <TrainingItem
            key={index}
            exercise={item.exercise}
            duration={item.duration}
            isEnabled={item.enabled}
            onToggle={handleToggle}
          />
        ))}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
   backgroundColor: '#F5F5F5',
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1, // Ensures title takes up remaining space
    marginLeft: 60,
  },
  content: {
    padding: 15,
  },
  workoutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15, // Increased space below workout title
    color: '#333',
  },
  workoutDate: {
    fontSize: 16,
    marginBottom: 20, // Increased space below workout date
    color: '#333',
  },
  trainingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15, // Increased space below training title
    color: '#333',
  },
  trainingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15, // Increased padding within the training item
    marginBottom: 20, // Increased space below each training item
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  trainingItemText: {
    flex: 1,
  },
  trainingItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  trainingItemDuration: {
    fontSize: 14,
    color: '#666',
  },
});

export default EditTrainingScreen;
