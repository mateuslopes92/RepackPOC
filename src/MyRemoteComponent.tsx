import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';

const MyRemoteComponent = ({ title = "Fancy Card", subtitle = "Pure React Native magic ✨" }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const glow = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 0.95,
        useNativeDriver: true,
      }),
      Animated.timing(glow, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(glow, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const borderColor = glow.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ffffff20', '#00ffff'],
  });

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View
        style={[
          styles.card,
          { transform: [{ scale }], borderColor },
        ]}
      >
        <View style={styles.gradientBg}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 16,
    padding: 20,
    margin: 20,
    shadowColor: '#00ffff',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    backgroundColor: '#0d0d0d',
  },
  gradientBg: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: 'linear-gradient(45deg, #1e1e1e, #121212)', // not real gradient, but fallback look
  },
  title: {
    color: '#00ffff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 16,
  },
});

export default MyRemoteComponent;