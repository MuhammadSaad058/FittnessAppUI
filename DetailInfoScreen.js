import React, { useContext, useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Animated } from "react-native";
import { AppContext } from './AppContext';

const DetailInfoScreen = () => {
  const { cnic, name, className, regno, selectedNationality } = useContext(AppContext);
  
  const borderColorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the border color from one color to another
    Animated.loop(
      Animated.sequence([
        Animated.timing(borderColorAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(borderColorAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [borderColorAnim]);

  // Interpolate the border color between two values
  const borderColor = borderColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#00796b", "#FF5722"] // Transition from green to orange
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Information</Text>
      <Animated.View style={[styles.infoContainer, { borderColor }]}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Welcome:</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <Text style={styles.label}>Registration Number:</Text>
          <Text style={styles.value}>{regno}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <Text style={styles.label}>Class:</Text>
          <Text style={styles.value}>{className}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <Text style={styles.label}>CNIC:</Text>
          <Text style={styles.value}>{cnic}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nationality:</Text>
          <Text style={styles.value}>{selectedNationality}</Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#E8F5E9",
    marginTop: 25,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#004d40',
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    borderWidth: 3, // Added border width to make the border visible
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#00796b',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
});

export default DetailInfoScreen;
