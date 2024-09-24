import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Text, Animated } from 'react-native';

const SplashScreenComponent = ({ navigation }) => {
  // Create animated values for dots
  const animatedValues = useRef(
    [...Array(20)].map(() => ({
      top: new Animated.Value(Math.random() * 100),
      left: new Animated.Value(Math.random() * 100),
      width: new Animated.Value(Math.random() * 20 + 5),
      height: new Animated.Value(Math.random() * 20 + 10),
      color: new Animated.Value(Math.random() * 360), // For color animation
    }))
  ).current;

  useEffect(() => {
    const animateDots = () => {
      Animated.loop(
        Animated.stagger(
          100, // Delay between each dot animation
          animatedValues.map(({ top, left, width, height, color }) =>
            Animated.parallel([
              Animated.loop(
                Animated.sequence([
                  Animated.timing(top, {
                    toValue: Math.random() * 100,
                    duration: 3000,
                    useNativeDriver: false,
                  }),
                  Animated.timing(left, {
                    toValue: Math.random() * 100,
                    duration: 3000,
                    useNativeDriver: false,
                  }),
                  Animated.timing(top, {
                    toValue: Math.random() * 100,
                    duration: 3000,
                    useNativeDriver: false,
                  }),
                  Animated.timing(left, {
                    toValue: Math.random() * 100,
                    duration: 3000,
                    useNativeDriver: false,
                  }),
                ])
              ),
              Animated.timing(width, {
                toValue: Math.random() * 20 + 5,
                duration: 3000,
                useNativeDriver: false,
              }),
              Animated.timing(height, {
                toValue: Math.random() * 20 + 10,
                duration: 3000,
                useNativeDriver: false,
              }),
              Animated.timing(color, {
                toValue: Math.random() * 360,
                duration: 3000,
                useNativeDriver: false,
              }),
            ])
          )
        ).start());
    };

    animateDots();

    const timer = setTimeout(() => {
      navigation.navigate('LandingScreen');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigation, animatedValues]);

  return (
    <View style={styles.container}>
      <View style={styles.topRightCorner} />
      <View style={styles.bottomLeftCorner} />
      <Image source={require('./assets/Logo.png')} style={styles.image} />
      <Text style={styles.title}>
        <Text style={styles.titlePurple}>FIT</Text>
        <Text style={styles.titleOriginal}>NESS</Text>
      </Text>
      {animatedValues.map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.irregularDot,
            {
              top: animatedValues[index].top.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
              left: animatedValues[index].left.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
              width: animatedValues[index].width,
              height: animatedValues[index].height,
              backgroundColor: animatedValues[index].color.interpolate({
                inputRange: [0, 360],
                outputRange: ['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)'],
              }),
              borderRadius: animatedValues[index].width.interpolate({
                inputRange: [5, 30],
                outputRange: [2.5, 15],
              }),
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
  },
  topRightCorner: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '50%',
    backgroundColor: '#6A1B9A',
  },
  bottomLeftCorner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '50%',
    height: '50%',
    backgroundColor: '#FF6F61',
  },
  image: {
    width: '40%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titlePurple: {
    color: '#6A1B9A',
  },
  titleOriginal: {
    color: 'green',
  },
  irregularDot: {
    position: 'absolute',
    backgroundColor: '#000',
    borderRadius: 15,
  },
});

export default SplashScreenComponent;
